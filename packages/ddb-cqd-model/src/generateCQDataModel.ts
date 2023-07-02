import { logwarn, set_correlation_token } from "@incta/common-utils"
import { DataModelerProps, generateDataModel, generateModelProps, tryGetProcessParam } from "@incta/ddb-model"
import { generateItems } from "@incta/ddb-model"
import { generateInjectItems } from "@incta/ddb-model"
import { join } from "path"
import { generateCQD } from "./fileGenerators/generateCQD"
import { _generateInjectCQ, _generateInjectD, _generateInjectDomainContext } from "./fileGenerators/_generateInjectCQD"
import { gnerateThunderCientRequestsCollection } from "./fileGenerators/gnerateThunderCientRequestsCollection"
import { generateCQDImpl } from "./fileGenerators/generateCQDImpl"

export interface generateCQDataModelProps extends generateModelProps {
}


export const generateCQDataModel =
    (context?: generateCQDataModelProps) => new Promise(async (resolve, reject) => {
        set_correlation_token("[DATA-MODELGEN]")
        logwarn("Start Generating Data model")
        try {
            const datamodelerProps = await generateDataModel(context);

            set_correlation_token("[COMMAND-QUERY-MODELGEN]")
            logwarn("Start Generating Command-Query model")

            // generate items and dtos for commands and queries - abs same as for items
            await generateItems(datamodelerProps.dataModelJson.Commands, join(datamodelerProps.dataModelFilesOutDir, 'items', 'commandItems'), datamodelerProps.importLibraryToUseInGeneratedFiles)
            await generateItems(datamodelerProps.dataModelJson.Queries, join(datamodelerProps.dataModelFilesOutDir, 'items', 'queryItems'), datamodelerProps.importLibraryToUseInGeneratedFiles)
            // generate injector functions for the *items* of the commands and queries
            await generateInjectItems(datamodelerProps.dataModelJson.Queries, join(datamodelerProps.dataModelFilesOutDir, 'items'), datamodelerProps.importLibraryToUseInGeneratedFiles, 'queryItems', 'DdbQueryItem')
            await generateInjectItems(datamodelerProps.dataModelJson.Commands, join(datamodelerProps.dataModelFilesOutDir, 'items'), datamodelerProps.importLibraryToUseInGeneratedFiles, 'commandItems', 'DdbCommandItem')

            // generate xyzDomain,xyzCommandDomain and xyzQueryDomain object definitions
            await generateCQD(datamodelerProps.dataModelJson.Items, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'domains', 'domainTemplate', 'Data')
            await generateCQD(datamodelerProps.dataModelJson.Commands, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'domains', 'domainTemplate', 'Command')
            await generateCQD(datamodelerProps.dataModelJson.Queries, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'domains', 'domainTemplate', 'Query')
            // scaffold hollow xyzDomainImpl,xyzCommandDomainImpl and xyzQueryDomainImpl - ONLY for nonexisting files
            if (datamodelerProps.generateHollowImplFiles) {
                await generateCQDImpl(datamodelerProps.dataModelJson.Items, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'domains-impl', 'domainImplTemplate', 'Data')
                await generateCQDImpl(datamodelerProps.dataModelJson.Commands, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'domains-impl', 'domainImplTemplate', 'Command')
                await generateCQDImpl(datamodelerProps.dataModelJson.Queries, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'domains-impl', 'domainImplTemplate', 'Query')
            }
            // generate xyzCommand and xyzQuery object definitions
            await generateCQD(datamodelerProps.dataModelJson.Commands, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'commands', 'commandTemplate', 'Command')
            await generateCQD(datamodelerProps.dataModelJson.Queries, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'queries', 'queryTemplate', 'Query')
            // scaffold hollow xyzCommandImpl,and xyzQueryImpl - ONLY for nonexisting files
            if (datamodelerProps.generateHollowImplFiles) {
                await generateCQDImpl(datamodelerProps.dataModelJson.Commands, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'commands-impl', 'commandImplTemplate', 'Command')
                await generateCQDImpl(datamodelerProps.dataModelJson.Queries, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'queries-impl', 'queryImplTemplate', 'Query')
            }
            // generate injector functions for xyzDomain,xyzCommand and xyzQuery object definitions
            await _generateInjectD(datamodelerProps.dataModelJson, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'domains', '_injectDomains')
            await _generateInjectCQ(datamodelerProps.dataModelJson.Commands, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'commands', '_injectCommands')
            await _generateInjectCQ(datamodelerProps.dataModelJson.Queries, datamodelerProps.dataModelFilesOutDir, datamodelerProps.importLibraryToUseInGeneratedFiles, 'queries', '_injectQueries')

            // a static template (no replacements) for all domain context entities injection
            await _generateInjectDomainContext(datamodelerProps.dataModelFilesOutDir)

            // generate thunder requests collection that will contain also CRUD actions for commands and queries
            // await gnerateThunderCientRequestsCollection(Object.assign({}, datamodelerProps.dataModelJson.Queries, datamodelerProps.dataModelJson.Items, datamodelerProps.dataModelJson.Commands), "TEST", datamodelerProps.dataModelFilesOutDir, datamodelerProps.globalSecondaryIndexesToCreate)
            await gnerateThunderCientRequestsCollection(datamodelerProps.dataModelJson, "TEST", datamodelerProps.dataModelFilesOutDir, datamodelerProps.dataModelJson.GlobalSecondaryIndexes)

        } catch (err) {
            reject(err)
        }
        resolve("Done.")
    })

