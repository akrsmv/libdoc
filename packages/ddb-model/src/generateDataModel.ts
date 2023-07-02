import { existsSync } from "fs"
import { validateDataModelContext } from "./validateDataModelContext"
import { generateItems } from "./fileGenerators/generateItems"
import { generateTableDefinitionJson } from "./fileGenerators/generateTableDefinitionJson"
import { rm, mkdir, writeFile } from "fs/promises"
import { gnerateThunderCientRequestsCollection } from "./fileGenerators/gnerateThunderCientRequestsCollection"
import { generateInjectItems } from "./fileGenerators/generateInjectItems"
import { logwarn, ppjson } from "@incta/common-utils"
import { join } from "path"
import { GSIDefinition, JSONDataModel } from "./interfaces/DataModel"

export interface generateModelProps {
    dataModelJsonPath?: string,
    dataModelFilesOutDir?: string,
    dataModelsDir?: string
    importLibraryToUseInGeneratedFiles?: string,
    generateHollowImplFiles?: string
}

/**
 * The Input needed for a data-modeler for generating objects
 */
export interface DataModelerProps {
    dataModelJson: JSONDataModel,
    dataModelFilesOutDir: string,
    importLibraryToUseInGeneratedFiles: string
    gsiKeysToRegularKeysMap: Map<string, string[]>,
    generateHollowImplFiles: boolean
}

export const generateDataModel =
    <T extends generateModelProps>(context?: T) => new Promise<DataModelerProps>(async (resolve, reject) => {
        const {
            gsiKeysToRegularKeysMap,
            dataModelJson,
            dataModelFilesOutDir,
            importLibraryToUseInGeneratedFiles,
            generateHollowImplFiles
        } = await validateDataModelContext(context)

        logwarn('GSI system keys configuration is ', gsiKeysToRegularKeysMap)

        try {
            // ?what for - make a backup copy of models in the passed out dir (if any exists)
            // files generated there are not to be manually edditted
            if (existsSync(dataModelFilesOutDir)) {
                // await cp(dataModelFilesOutDir, dataModelFilesOutDir + "_bakup_previous_generation", { recursive: true })
                await rm(dataModelFilesOutDir, {recursive:true})
            }
            await mkdir(dataModelFilesOutDir, {recursive: true})
            await writeFile(join(dataModelFilesOutDir, 'data-model.json'), ppjson(dataModelJson))

            // generate typescript classes, backing up each dynamo item
            await generateItems(dataModelJson.Items, join(dataModelFilesOutDir, 'items', 'dataItems'), importLibraryToUseInGeneratedFiles)

            // gnerate the entry method for injecting domain context
            await generateInjectItems(dataModelJson.Items, join(dataModelFilesOutDir, 'items'), importLibraryToUseInGeneratedFiles, 'dataItems', 'DdbItem')

            // generate table definition json
            await generateTableDefinitionJson("TEST", dataModelFilesOutDir, dataModelJson.GlobalSecondaryIndexes)

            // generate thunder requests collection
            await gnerateThunderCientRequestsCollection(dataModelJson.Items, "TEST", dataModelFilesOutDir, dataModelJson.GlobalSecondaryIndexes)

        } catch (err) {
            reject(err)
        }
        resolve({
            gsiKeysToRegularKeysMap,
            dataModelJson,
            dataModelFilesOutDir,
            importLibraryToUseInGeneratedFiles,
            generateHollowImplFiles
        })
    })

