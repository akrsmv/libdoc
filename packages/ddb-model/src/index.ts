#!/usr/bin/env node

export * from "./interfaces/DataModel"
export * from "./interfaces/TableModel"
export * from "./interfaces/DdbItem"
export * from "./interfaces/DbConfig"
export * from "./reservedWords"
export * from "./generateDataModel"
export * from "./fileGenerators/generateItems"
export * from "./fileGenerators/generateInjectItems"
export * from "./ddb-utils/metadata/metadataGetters"
export * from "./tryGetProcessParam"

export const INCTA_GSI_BASE_CONFIG = {
    createTITEMstaticIndex: true,
    createTITEMgsiForEachGSI: true
}

