import { logdebug } from "@incta/common-utils"
import { __domain, _sep1, _sep2, versionString } from "@incta/ddb-model"
import { createItem, getItems, patchItem } from "@incta/ddb-actions"
import { User } from "./domain-context/items/dataItems/User"
import { _injectDataItems } from "./domain-context/items/dataItems/_injectDataItems"
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";


/**
 * TODO excerpt in separate npm package
 * TODO should have access to GET ITEMS ONLY FOR TENANTUSERCONFIG
 * @param evnt 
 * @param context 
 * @param callback 
 * @returns 
 */
export const handler = async (evnt: any, context?: any, callback?: Function): Promise<any> => {
	logdebug('SQS LAMBDA WORKER TRIGGERED', { evnt, context })
	// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	// SPDX-License-Identifier: Apache-2.0

	const ses = new SESClient({ region: "eu-west-1" });

	const command = new SendEmailCommand({
		Destination: {
			ToAddresses: ["office@inctasoft.com"],
		},
		Message: {
			Body: {
				Text: { Data: "Test" },
			},

			Subject: { Data: "Hello from AWS SES" },
		},
		Source: "office@inctasoft.com",
	});

	try {
		let response = await ses.send(command);
		// process data.
		logdebug('SES send response is', response)
		return response;
	}
	catch (error) {
		logdebug('CATCH send error is', error)

		// error handling.
	}
	finally {
		// finally.
	}
};



