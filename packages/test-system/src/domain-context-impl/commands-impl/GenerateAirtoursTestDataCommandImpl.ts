import { DdbItem, IClaims, IIdentity, _sep1, _sep2, removeVersionString, versionString, withPrefix } from "@incta/ddb-model";
import { GenerateAirtoursTestData } from "../../domain-context/items/commandItems/GenerateAirtoursTestData";
import { DB_NAME, bulkCreateItems, createItem, dynamoDbClient } from '@incta/ddb-actions'
import { AirplaneManifacturer } from "../../domain-context/items/dataItems/AirplaneManifacturer";
import { AirplaneModel } from "../../domain-context/items/dataItems/AirplaneModel";
import { beijing_airport_addrress, boston_airport_addrress, brisbane_airport_addrress, melbourne_airport_addrress, moscow_airport_addrress, newyourk_airport_addrress, plovdiv_airport_addrress, ru_country, shanghai_airport_addrress, sofia_airport_addrress, stpetersberg_airport_addrress, us_country } from "./GenerateAirtoursPublicTestDataCommandImpl";
import { Airport } from "../../domain-context/items/dataItems/Airport";
import { Airplane } from "../../domain-context/items/dataItems/Airplane";
import { TouristSeason } from "../../domain-context/items/dataItems/TouristSeason";
import { Flight } from "../../domain-context/items/dataItems/Flight";
import { FlightTickets_priceDto } from "../../domain-context/items/dataItems/dtos/FlightTickets_priceDto";
import { UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { delay, logdebug } from "@incta/common-utils";

const addDays = (date: Date, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
const createFlightInThePast = (input: {
    fromAirport: Airport,
    toAirport: Airport,
    flightDurationHours: number,
    airplane: Airplane,
    touristSeason: TouristSeason,
    dateInThePast: Date,
}, identity: Partial<IIdentity<Partial<IClaims>>>|null, count: number, allItemsArr: DdbItem[], TITEMUpdatesMap: Map<number, Date>) => {
    const tickets_price: FlightTickets_priceDto = {
        class_1: 100 * (input.touristSeason.discounts?.class_1 || 1) / 100,
        class_2: 100 * (input.touristSeason.discounts?.class_2 || 1) / 100,
        class_vip: 100 * (input.touristSeason.discounts?.vip || 1) / 100
    }
    allItemsArr.push(new Flight({
        args: {
            HASH: `${Flight.__typename}${_sep1}${count}`,
            RANGE: `${versionString(0)}${_sep1}${Flight.__typename}${_sep1}${count}`,
            airplane: input.airplane.id,
            to_airport: input.toAirport.id,
            from_airport: input.fromAirport.id,
            touristSeason: input.touristSeason.id,
            duration_hours: input.flightDurationHours,
            start_date: input.dateInThePast,
            end_date: new Date(input.dateInThePast.getTime() + input.flightDurationHours * 60 * 60 * 1000),
            tickets_price
        }, identity
    }))
    TITEMUpdatesMap.set(count, input.dateInThePast)
}
// const createFlightInThePast = async (input: {
//     fromAirport: Airport,
//     toAirport: Airport,
//     flightDurationHours: number,
//     airplane: Airplane,
//     touristSeason: TouristSeason,
//     dateInThePast: Date,
// }, identity: IIdentity, count: number) => {
//     const __prefix = `${identity?.sub}${_sep1}${identity.claims.active_agent}`
//     const tickets_price: FlightTickets_priceDto = {
//         class_1: 100 * (input.touristSeason.discounts?.class_1 || 1) / 100,
//         class_2: 100 * (input.touristSeason.discounts?.class_2 || 1) / 100,
//         class_vip: 100 * (input.touristSeason.discounts?.vip || 1) / 100
//     }
//     const flight = new Flight({
//         args: {
//             HASH: `${Flight.__typename}${_sep1}${count}`,
//             RANGE: `${Flight.__typename}${_sep1}${count}`,
//             airplane: input.airplane.id,
//             to_airport: input.toAirport.id,
//             from_airport: input.fromAirport.id,
//             touristSeason: input.touristSeason.id,
//             duration_hours: input.flightDurationHours,
//             start_date: input.dateInThePast,
//             end_date: new Date(input.dateInThePast.getTime() + input.flightDurationHours * 60 * 60 * 1000),
//             tickets_price
//         }, identity
//     })
//     await createItem(flight, identity)
//     await dynamoDbClient().send(new UpdateItemCommand({
//         TableName: DB_NAME(),
//         Key: {
//             HASH: { S: `^${__prefix}^${Flight.__typename}${_sep1}${count}` },
//             RANGE: { S: `^${__prefix}^${Flight.__typename}${_sep1}${count}` }
//         },
//         UpdateExpression: 'SET date_created = :date_created, TITEM = :TITEM',
//         ExpressionAttributeValues: {
//             ':date_created': { S: input.dateInThePast.toISOString() },
//             ':TITEM': { S: withPrefix(`${Flight.__typename}${_sep1}${input.dateInThePast.toISOString().slice(0, 10)}`, false, identity) }
//         }
//     }))

// }
/**
 * A test data generator. It does not make use of the fakeIdentity object in any way
 * 
 * Values for items prefix is constructed from payload forUser/forAgent
 * 
 * @param generateAirtoursTestData 
 * @param identity not used in this case
 */
export const start = async (generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>>|null): Promise<void> => {
    const __usr = String(generateAirtoursTestData?.forUser)
    const __agt = String(generateAirtoursTestData?.forAgent)
    const test_data_end_date = generateAirtoursTestData.test_data_date ? new Date(generateAirtoursTestData.test_data_date) : new Date()
    // overwrite with fake identity taken from command parameters
    identity = {
        sub: String(generateAirtoursTestData?.forUser),
        claims: {
            active_agent: String(generateAirtoursTestData.forAgent),
        },
        username: String(generateAirtoursTestData?.forUser)
    }

    // Airplane manifacturers
    const boeing = new AirplaneManifacturer({ args: { code: "boeing", HASH: `AirplaneManifacturer${_sep1}1`, RANGE: `${versionString(0)}${_sep1}AirplaneManifacturer${_sep1}1`, name: "BOEING", country: us_country.id }, identity })
    const irkut = new AirplaneManifacturer({ args: { code: "irkut", HASH: `AirplaneManifacturer${_sep1}2`, RANGE: `${versionString(0)}${_sep1}AirplaneManifacturer${_sep1}2`, name: "IRKUT", country: ru_country.id }, identity })
    const sukhoi = new AirplaneManifacturer({ args: { code: "sukhoi", HASH: `AirplaneManifacturer${_sep1}3`, RANGE: `${versionString(0)}${_sep1}AirplaneManifacturer${_sep1}3`, name: "SUKHOI", country: ru_country.id }, identity })
    await createItem(boeing, identity)
    await createItem(irkut, identity)
    await createItem(sukhoi, identity)

    // Airplane models
    const model_787 = new AirplaneModel({ args: { capacity: 240, code: "model_787", HASH: `${boeing.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(boeing.RANGE)}${_sep1}AirplaneModel${_sep1}1`, name: "Boeing 787", country: us_country.id }, identity })
    const model_mc21 = new AirplaneModel({ args: { capacity: 230, code: "model_mc21", HASH: `${irkut.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(irkut.RANGE)}${_sep1}AirplaneModel${_sep1}2`, name: "MC-21", country: ru_country.id }, identity })
    const model_mc21_400 = new AirplaneModel({ args: { capacity: 260, code: "model_mc21_400", HASH: `${irkut.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(irkut.RANGE)}${_sep1}AirplaneModel${_sep1}3`, name: "MC-21-400", country: ru_country.id, baseAirplaneModel: model_mc21.id, manifacturers: [sukhoi.id, irkut.id] }, identity })
    const model_sukhoi100 = new AirplaneModel({ args: { capacity: 100, code: "model_sukhoi100", HASH: `${sukhoi.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(sukhoi.RANGE)}${_sep1}AirplaneModel${_sep1}4`, name: "Sukhoi Superjet", country: ru_country.id }, identity })
    await createItem(model_787, identity)
    await createItem(model_mc21, identity)
    await createItem(model_mc21_400, identity)
    await createItem(model_sukhoi100, identity)

    // 11 airplanes
    const plane_pln111mc21 = new Airplane({ args: { HASH: `Airplane${_sep1}1`, RANGE: `${versionString(0)}${_sep1}Airplane${_sep1}1`, nr_seats_class_vip: 20, nr_seats_class1: 90, nr_seats_class2: 120, code: "pln111mc21", country: ru_country.id, manifacturer: irkut.id, model: model_mc21.id }, identity })
    const plane_pln222mc21 = new Airplane({ args: { HASH: `Airplane${_sep1}2`, RANGE: `${versionString(0)}${_sep1}Airplane${_sep1}2`, nr_seats_class_vip: 20, nr_seats_class1: 90, nr_seats_class2: 120, code: "pln222mc21", country: ru_country.id, manifacturer: irkut.id, model: model_mc21.id }, identity })
    const plane_pln333sukhoi144 = new Airplane({ args: { HASH: `Airplane${_sep1}3`, RANGE: `${versionString(0)}${_sep1}Airplane${_sep1}3`, nr_seats_class_vip: 50, code: "pln333sukhoi100", country: ru_country.id, manifacturer: sukhoi.id, model: model_sukhoi100.id }, identity })
    const plane_pln444sukhoi144 = new Airplane({ args: { HASH: `Airplane${_sep1}4`, RANGE: `${versionString(0)}${_sep1}Airplane${_sep1}4`, nr_seats_class_vip: 50, code: "pln444sukhoi100", country: ru_country.id, manifacturer: sukhoi.id, model: model_sukhoi100.id }, identity })
    const plane_pln555sukhoi144 = new Airplane({ args: { HASH: `Airplane${_sep1}5`, RANGE: `${versionString(0)}${_sep1}Airplane${_sep1}5`, nr_seats_class_vip: 50, code: "pln555sukhoi100", country: ru_country.id, manifacturer: sukhoi.id, model: model_sukhoi100.id }, identity })
    const plane_pln666b787 = new Airplane({ args: { HASH: `Airplane${_sep1}6`, RANGE: `${versionString(0)}${_sep1}Airplane${_sep1}6`, nr_seats_class_vip: 42, nr_seats_class1: 100, nr_seats_class2: 100, code: "pln666b787", country: us_country.id, manifacturer: boeing.id, model: model_787.id }, identity })
    const plane_pln777b787 = new Airplane({ args: { HASH: `Airplane${_sep1}7`, RANGE: `${versionString(0)}${_sep1}Airplane${_sep1}7`, nr_seats_class_vip: 50, nr_seats_class1: 200, nr_seats_class2: 0, code: "pln777b787", country: us_country.id, manifacturer: boeing.id, model: model_787.id }, identity })
    const plane_pln888b787 = new Airplane({ args: { HASH: `Airplane${_sep1}8`, RANGE: `${versionString(0)}${_sep1}Airplane${_sep1}8`, nr_seats_class_vip: 20, nr_seats_class1: 180, nr_seats_class2: 50, code: "pln888b787", country: us_country.id, manifacturer: boeing.id, model: model_787.id }, identity })
    const plane_pln999b787 = new Airplane({ args: { HASH: `Airplane${_sep1}9`, RANGE: `${versionString(0)}${_sep1}Airplane${_sep1}9`, nr_seats_class_vip: 42, nr_seats_class1: 100, nr_seats_class2: 100, code: "pln999b787", country: us_country.id, manifacturer: boeing.id, model: model_787.id }, identity })
    const plane_pln100mc21_400 = new Airplane({ args: { HASH: `Airplane${_sep1}10`, RANGE: `${versionString(0)}${_sep1}Airplane${_sep1}10`, nr_seats_class1: 260, code: "pln100mc21400", country: ru_country.id, manifacturer: irkut.id, model: model_mc21_400.id }, identity })
    const plane_pln110mc21_400 = new Airplane({ args: { HASH: `Airplane${_sep1}11`, RANGE: `${versionString(0)}${_sep1}Airplane${_sep1}11`, nr_seats_class1: 260, code: "pln110mc21400", country: ru_country.id, manifacturer: irkut.id, model: model_mc21_400.id }, identity })
    await createItem(plane_pln111mc21, identity)
    await createItem(plane_pln222mc21, identity)
    await createItem(plane_pln333sukhoi144, identity)
    await createItem(plane_pln444sukhoi144, identity)
    await createItem(plane_pln555sukhoi144, identity)
    await createItem(plane_pln666b787, identity)
    await createItem(plane_pln777b787, identity)
    await createItem(plane_pln888b787, identity)
    await createItem(plane_pln999b787, identity)
    await createItem(plane_pln100mc21_400, identity)
    await createItem(plane_pln110mc21_400, identity)


    // 8 tourist seasons
    const q1_2023 = new TouristSeason({ args: { start_date: new Date(2023, 1, 1), end_date: new Date(2023, 3, 31), HASH: `TouristSeason${_sep1}2023/Q1Id`, RANGE: `${versionString(0)}${_sep1}TouristSeason${_sep1}2023/Q1Id`, code: "2023/Q1", price_flight_per_hour: 15, discounts: { vip: 30, class_1: 10, class_2: 20 } }, identity })
    const q2_2023 = new TouristSeason({ args: { start_date: new Date(2023, 4, 1), end_date: new Date(2023, 6, 30), HASH: `TouristSeason${_sep1}2023/Q2Id`, RANGE: `${versionString(0)}${_sep1}TouristSeason${_sep1}2023/Q2Id`, code: "2023/Q2", price_flight_per_hour: 19, discounts: { vip: 60, class_1: 20, class_2: 40 } }, identity })
    const q3_2023 = new TouristSeason({ args: { start_date: new Date(2023, 7, 1), end_date: new Date(2023, 9, 30), HASH: `TouristSeason${_sep1}2023/Q3Id`, RANGE: `${versionString(0)}${_sep1}TouristSeason${_sep1}2023/Q3Id`, code: "2023/Q3", price_flight_per_hour: 50, discounts: { vip: 35, class_1: 10, class_2: 20 } }, identity })
    const q4_2023 = new TouristSeason({ args: { start_date: new Date(2023, 10, 1), end_date: new Date(2023, 12, 31), HASH: `TouristSeason${_sep1}2023/Q4Id`, RANGE: `${versionString(0)}${_sep1}TouristSeason${_sep1}2023/Q4Id`, code: "2023/Q4", price_flight_per_hour: 40, discounts: { vip: 45, class_1: 10, class_2: 20 } }, identity })
    const q1_2024 = new TouristSeason({ args: { start_date: new Date(2024, 1, 1), end_date: new Date(2024, 3, 31), HASH: `TouristSeason${_sep1}2024/Q1Id`, RANGE: `${versionString(0)}${_sep1}TouristSeason${_sep1}2024/Q1Id`, code: "2024/Q1", price_flight_per_hour: 35, discounts: { vip: 45, class_1: 11, class_2: 23 } }, identity })
    const q2_2024 = new TouristSeason({ args: { start_date: new Date(2024, 4, 1), end_date: new Date(2024, 6, 30), HASH: `TouristSeason${_sep1}2024/Q2Id`, RANGE: `${versionString(0)}${_sep1}TouristSeason${_sep1}2024/Q2Id`, code: "2024/Q2", price_flight_per_hour: 35, discounts: { vip: 30, class_1: 11, class_2: 25 } }, identity })
    const q3_2024 = new TouristSeason({ args: { start_date: new Date(2024, 7, 1), end_date: new Date(2024, 9, 30), HASH: `TouristSeason${_sep1}2024/Q3Id`, RANGE: `${versionString(0)}${_sep1}TouristSeason${_sep1}2024/Q3Id`, code: "2024/Q3", price_flight_per_hour: 13, discounts: { vip: 50, class_1: 20, class_2: 40 } }, identity })
    const q4_2024 = new TouristSeason({ args: { start_date: new Date(2024, 10, 1), end_date: new Date(2024, 12, 31), HASH: `TouristSeason${_sep1}2024/Q4Id`, RANGE: `${versionString(0)}${_sep1}TouristSeason${_sep1}2024/Q4Id`, code: "2024/Q4", price_flight_per_hour: 13, discounts: { vip: 50, class_1: 20, class_2: 40 } }, identity })
    await createItem(q1_2023, identity)
    await createItem(q2_2023, identity)
    await createItem(q3_2023, identity)
    await createItem(q4_2023, identity)
    await createItem(q1_2024, identity)
    await createItem(q2_2024, identity)
    await createItem(q3_2024, identity)
    await createItem(q4_2024, identity)

    // 20 flights - Can be many autogenerated
    let touristSeason: TouristSeason
    let flights_count = 0
    let allFlights: DdbItem[] = []
    let TITEMUpdaesMap = new Map<number, Date>()
    for (let days = 0; days <= 5; days++) {//730 -- 2years+ data for each day
        if (days <= 90) touristSeason = q4_2024
        else if (days > 90 && days <= 180) touristSeason = q3_2024
        else if (days > 180 && days <= 270) touristSeason = q2_2024
        else if (days > 270 && days <= 360) touristSeason = q1_2024
        else if (days > 450 && days <= 540) touristSeason = q4_2023
        else if (days > 540 && days <= 630) touristSeason = q3_2023
        else if (days > 630 && days <= 720) touristSeason = q2_2023
        else touristSeason = q1_2023

        createFlightInThePast({
            airplane: plane_pln111mc21,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 12,
            fromAirport: moscow_airport_addrress,
            toAirport: newyourk_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln222mc21,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 13,
            fromAirport: stpetersberg_airport_addrress,
            toAirport: newyourk_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln333sukhoi144,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 2,
            fromAirport: sofia_airport_addrress,
            toAirport: moscow_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln333sukhoi144,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 1,
            fromAirport: sofia_airport_addrress,
            toAirport: plovdiv_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln444sukhoi144,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 10,
            fromAirport: moscow_airport_addrress,
            toAirport: beijing_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln555sukhoi144,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 11,
            fromAirport: stpetersberg_airport_addrress,
            toAirport: shanghai_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln666b787,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 3,
            fromAirport: newyourk_airport_addrress,
            toAirport: boston_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln777b787,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 6,
            fromAirport: brisbane_airport_addrress,
            toAirport: newyourk_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln777b787,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 3,
            fromAirport: boston_airport_addrress,
            toAirport: newyourk_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln888b787,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 5,
            fromAirport: newyourk_airport_addrress,
            toAirport: melbourne_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln999b787,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 7,
            fromAirport: melbourne_airport_addrress,
            toAirport: shanghai_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln100mc21_400,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 12,
            fromAirport: shanghai_airport_addrress,
            toAirport: beijing_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
        createFlightInThePast({
            airplane: plane_pln110mc21_400,
            dateInThePast: addDays(test_data_end_date, -days),
            flightDurationHours: 1,
            fromAirport: melbourne_airport_addrress,
            toAirport: brisbane_airport_addrress,
            touristSeason: touristSeason
        }, identity, ++flights_count, allFlights, TITEMUpdaesMap)
    }

    await bulkCreateItems(allFlights, identity)
    for (const [count, date] of TITEMUpdaesMap) {
        const updateCommand = new UpdateItemCommand({
            TableName: DB_NAME(),
            Key: {
                HASH: { S: withPrefix(`${Flight.__typename}${_sep1}${count}`, false, identity) },
                RANGE: { S: withPrefix(`${versionString(0)}${_sep1}${Flight.__typename}${_sep1}${count}`, false, identity) }
            },
            UpdateExpression: 'SET date_created = :date_created, TITEM = :TITEM',
            ExpressionAttributeValues: {
                ':date_created': { S: date.toISOString() },
                ':TITEM': { S: withPrefix(`${Flight.__typename}${_sep1}${date.toISOString().slice(0, 10)}`, false, identity) }
            }
        })
        logdebug('update Flight command is ', updateCommand)
        const updateResult = await dynamoDbClient().send(updateCommand)
        logdebug('update Flight command result is ', updateResult)

    }

    // Tourists many auto generated (pull names.ts)
}

export const validateStart = async (generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {

}

export const onSingleCommandEventError = async (generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {

}

export const onCommandCompleted = async (generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {

}

export const onCommandErrored = async (generateAirtoursTestData: GenerateAirtoursTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {

}
