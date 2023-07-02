import { chunks, logdebug, loginfo, set_correlation_token } from "@incta/common-utils"
import { IClaims, IIdentity, __domain, _sep1, _sep2, versionString, withPrefix } from "@incta/ddb-model"
import { DB_NAME, createItem, dynamoDbClient, getItems, inferIdentityOfExitingkey, inferItemKeys, patchItem, toAttributeMap } from "@incta/ddb-actions"
import { _injectDataItems } from "./domain-context/items/dataItems/_injectDataItems"
import { DynamoDBStreamEvent } from "aws-lambda"
import { UpdateItemCommand } from "@aws-sdk/client-dynamodb"

/**
 * TODO excerpt in separate npm package
 * TODO should have access to GET ITEMS ONLY FOR TENANTUSERCONFIG
 * TODO Filter items at stream level and reduce if statements: https://www.alexdebrie.com/bites/dynamodb-streams/ -> the link "filter records at the stream level"
 * for example exists: __typename AND version equals 0. NOTE a separate "ver" key 
 * @param evnt 
 * @param context 
 * @param callback 
 * @returns 
 */
export const handler = async (evnt: DynamoDBStreamEvent, context?: any, callback?: Function): Promise<any> => {
	set_correlation_token(`incta-ddb-events|${context.awsRequestId}`)
	logdebug('DB STREAMS LAMBDA TRIGGERED', { evnt, context })

	let result = {}

	//#region // -------------------- AGGREGATE PROCEDURE's PROCESSED/ERRORED EVENTS --------------------
	const countersProcEventsMap = new Map<string, { success: number, errored: number }>()
	for (const rec of evnt.Records.filter(record =>
	(
		!!record.dynamodb?.NewImage
		&&
		!!record.dynamodb?.NewImage["RANGE"]
		&&
		!!record.dynamodb?.NewImage["__proc"]
		&&
		!!record.dynamodb?.NewImage["correlation_id"]
		// fire only for main items
		&& (
			(record.dynamodb?.NewImage as { RANGE: { S: string } })["RANGE"].S.includes(versionString(0)) ///TODO filter on stream level by "ver: 0"
			|| // or for errored procedures
			(record.dynamodb?.NewImage as { RANGE: { S: string } })["RANGE"].S.includes("errored") // TODO filter on stream levelby begins_with: errored
		)
		&&
		// fire only for items which were indeed changed as part of a procedure
		//(__proc key can become obsolate as it remains in the item(__typename?), thats why compare it to the ringToken, which is always updated)
		((record.dynamodb?.NewImage as { correlation_id: { S: string } })["correlation_id"].S as string) === ((record.dynamodb?.NewImage as { __proc: { S: string } })["__proc"].S as string).substring(((record.dynamodb?.NewImage as { __proc: { S: string } })["__proc"].S as string).indexOf("|") + 1)
	)
	)) {
		// TODO make it faster, remove the fromAttributeMap call and directly use the record only
		// const newImage = fromAttributeMap(rec.dynamodb?.NewImage as AttributeMap) as InstanceType<DynamoItem>
		loginfo("new Image: ", rec.dynamodb?.NewImage)

		const RANGE = String(rec.dynamodb?.NewImage && rec.dynamodb?.NewImage?.RANGE?.S)
		const id = String(rec.dynamodb?.NewImage && rec.dynamodb?.NewImage?.id?.S)
		if (countersProcEventsMap.has(id)) {
			if (RANGE.includes("errored")) {
				if (rec.eventName === "MODIFY" && !!rec.dynamodb?.NewImage && Array.isArray(rec.dynamodb.NewImage.errors.L) && rec.dynamodb.NewImage.errors.L.length === 4) {
					// ! - above we check for presence
					countersProcEventsMap.get(id)!.errored++
				}
			} else {
				// ! - above we check for presence
				countersProcEventsMap.get(id)!.success++
			}
		} else {
			if (RANGE.includes("errored")) {
				if (rec.eventName === "MODIFY" && !!rec.dynamodb?.NewImage && Array.isArray(rec.dynamodb.NewImage.errors.L) && rec.dynamodb.NewImage.errors.L.length === 4) {
					countersProcEventsMap.set(id, { success: 0, errored: 1 })
				}
			} else {
				countersProcEventsMap.set(id, { success: 1, errored: 0 })
			}
		}
	}
	!process.env.DEBUGGER || console.log("ENTERS AGGREGATION OF PROC EVENTS ", countersProcEventsMap)

	await publishProcAggregatesUpdate(countersProcEventsMap, context.awsRequestId)
	//#endregion

	//#region // -------------------- AGGREGATE ITEM COUNTERS BY TYPE AND STATE --------------------
	if (!process.env.DO_NOT_AGGREGATE) {
		const typesByStatusesMapNew = new Map<string, number>()
		const typesByStatusesMapOld = new Map<string, number>()
		for (const rec of evnt.Records.filter(record => record.eventSource === "aws:dynamodb" && record.eventName === "MODIFY"
			&& !!record.dynamodb?.NewImage && !!record.dynamodb?.OldImage
			&& !!record.dynamodb?.NewImage?.__typename && !!record.dynamodb?.OldImage?.__typename // <- new filter ensuring __typename,fighting the 22 undefined|udefined counters problem
			&& (record.dynamodb?.NewImage as { RANGE: { S: string } })["RANGE"].S.includes(versionString(0))
			&& (((record.dynamodb?.NewImage as { item_state: { S: string } })["item_state"] || { S: "undefined" }).S) !== (((record.dynamodb?.OldImage as { item_state: { S: string } })["item_state"] || { S: "undefined" }).S))) { // fire only for main items

			// update aggregations
			// total items of this type and state
			const oldCounter = `${((rec.dynamodb?.NewImage as { __typename: { S: string } })["__typename"] || { S: "undefined" }).S}|${((rec.dynamodb?.OldImage as { item_state: { S: string } })["item_state"] || { S: "undefined" }).S}`
			const newCounter = `${((rec.dynamodb?.NewImage as { __typename: { S: string } })["__typename"] || { S: "undefined" }).S}|${((rec.dynamodb?.NewImage as { item_state: { S: string } })["item_state"] || { S: "undefined" }).S}`
			const id = String(rec.dynamodb?.NewImage && rec.dynamodb?.NewImage?.id?.S)
			const identity = inferIdentityOfExitingkey(id)
			const aggregationHASH = withPrefix('aggregations', false, identity)
			if (typesByStatusesMapNew.has(`${aggregationHASH}___${newCounter}`)) {
				typesByStatusesMapNew.set(`${aggregationHASH}___${newCounter}`, (typesByStatusesMapNew.get(`${aggregationHASH}___${newCounter}`) as number) + 1)
			} else {
				typesByStatusesMapNew.set(`${aggregationHASH}___${newCounter}`, 1)
			}
			if (typesByStatusesMapOld.has(`${aggregationHASH}___${oldCounter}`)) {
				typesByStatusesMapOld.set(`${aggregationHASH}___${oldCounter}`, (typesByStatusesMapOld.get(`${aggregationHASH}___${oldCounter}`) as number) + 1)
			} else {
				typesByStatusesMapOld.set(`${aggregationHASH}___${oldCounter}`, 1)
			}
		}

		await publishItemAggregatesUpdate(typesByStatusesMapOld, 'subtracting')
		await publishItemAggregatesUpdate(typesByStatusesMapNew, 'adding')

		// ----------- AGGREGATE NEW RECORDS ----------------
		typesByStatusesMapNew.clear()
		for (const rec of evnt.Records.filter(record => record.eventSource === "aws:dynamodb" && record.eventName === "INSERT"
			&& !!record.dynamodb?.NewImage && (record.dynamodb?.NewImage as { RANGE: { S: string } })["RANGE"].S.includes(`v_0`)
			&& !!record.dynamodb?.NewImage?.__typename  // <- new filter ensuring __typename,fighting the 22 undefined|udefined counters problem
			)) { // fire only for main items

			const counter = `${((rec.dynamodb?.NewImage as { __typename: { S: string } })["__typename"] || { S: "undefined" }).S}|${((rec.dynamodb?.NewImage as { item_state: { S: string } })["item_state"] || { S: "undefined" }).S}`
			const id = String(rec.dynamodb?.NewImage && rec.dynamodb?.NewImage?.id?.S)
			const identity = inferIdentityOfExitingkey(id)
			const aggregationHASH = withPrefix('aggregations', false, identity)
			if (typesByStatusesMapNew.has(`${aggregationHASH}___${counter}`)) {
				typesByStatusesMapNew.set(`${aggregationHASH}___${counter}`, (typesByStatusesMapNew.get(`${aggregationHASH}___${counter}`) as number) + 1)
			} else {
				typesByStatusesMapNew.set(`${aggregationHASH}___${counter}`, 1)
			}
		}

		await publishItemAggregatesUpdate(typesByStatusesMapNew, 'adding')

		// ----------- AGGREGATE REMOVED RECORDS ----------------
		typesByStatusesMapOld.clear()
		for (const rec of evnt.Records.filter(record => record.eventSource === "aws:dynamodb" && record.eventName === "REMOVE"
			&& !!record.dynamodb?.OldImage && (record.dynamodb?.OldImage as { RANGE: { S: string } })["RANGE"].S.includes(`v_0`)
			&& !!record.dynamodb?.OldImage?.__typename // <- new filter ensuring __typename,fighting the 22 undefined|udefined counters problem
			)) { // fire only for main items

			const counter = `${((rec.dynamodb?.OldImage as { __typename: { S: string } })["__typename"] || { S: "undefined" }).S}|${((rec.dynamodb?.OldImage as { item_state: { S: string } })["item_state"] || { S: "undefined" }).S}`
			const id = String(rec.dynamodb?.OldImage && rec.dynamodb?.OldImage?.id?.S)
			const identity = inferIdentityOfExitingkey(id)
			const aggregationHASH = withPrefix('aggregations', false, identity)
			if (typesByStatusesMapOld.has(`${aggregationHASH}___${counter}`)) {
				typesByStatusesMapOld.set(`${aggregationHASH}___${counter}`, (typesByStatusesMapOld.get(`${aggregationHASH}___${counter}`) as number) + 1)
			} else {
				typesByStatusesMapOld.set(`${aggregationHASH}___${counter}`, 1)
			}
		}

		await publishItemAggregatesUpdate(typesByStatusesMapOld, 'subtracting')
	}
	//#endregion

	return result

}


const publishProcAggregatesUpdate = async (updateMap: Map<string, { success: number, errored: number }>, awsRequestId: string) => {
	for (const idkey of updateMap.keys()) {
		const updateCommand = new UpdateItemCommand({
			TableName: DB_NAME(),
			Key: toAttributeMap(inferItemKeys(idkey, false)[0]), UpdateExpression: `SET #processed_events = if_not_exists(#processed_events, :zero) + :inc_success, #errored_events = if_not_exists(#errored_events, :zero) + :inc_errored`,
			ExpressionAttributeNames: { [`#processed_events`]: "processed_events", [`#errored_events`]: "errored_events" },
			ExpressionAttributeValues: { ":zero": { "N": "0" }, ":inc_success": { "N": `${updateMap.get(idkey)?.success}` }, ":inc_errored": { "N": `${updateMap.get(idkey)?.errored}` } }
		})
		logdebug('[publishProcAggregatesUpdate] ==> DDB', updateCommand)
		const updateResult = await dynamoDbClient().send(updateCommand)
		logdebug('[publishProcAggregatesUpdate] <== DDB', updateResult)
	}
}

const publishItemAggregatesUpdate = async (updateMap: Map<string, number>, adding: 'adding' | 'subtracting') => {
	for (const [aggregationHASH, typeofCountRANGE] of Array.from(updateMap.keys()).map(hash___range => hash___range.split('___'))) {
		const updateCommand = new UpdateItemCommand({
			TableName: DB_NAME(),
			Key: Object.assign({
				HASH: { S: aggregationHASH },
				RANGE: { S: typeofCountRANGE },
			}),
			UpdateExpression: `SET #count = if_not_exists(#count, :zero) ${adding === 'adding' ? '+' : '-'} :inc`,
			ExpressionAttributeNames: { [`#count`]: "count" },
			ExpressionAttributeValues: { ":zero": { "N": "0" }, ":inc": { "N": `${updateMap.get(`${aggregationHASH}___${typeofCountRANGE}`)}` } }
		})
		logdebug('[publishItemAggregatesUpdate] ==> DDB', updateCommand)
		const updateResult = await dynamoDbClient().send(updateCommand)
		logdebug('[publishItemAggregatesUpdate] <== DDB', updateResult)
	}
}

