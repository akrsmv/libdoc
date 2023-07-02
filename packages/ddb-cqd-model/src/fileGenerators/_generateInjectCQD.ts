import * as nunjucks from 'nunjucks'
import { mkdir, writeFile } from "fs/promises";
import { join, sep } from "path";
import { readFileSync } from "fs";
import { plural } from "pluralize";
import { firstCaseUpper } from "@incta/common-utils";
import { DataModelObject, JSONDataModel } from '@incta/ddb-model';

export const _generateInjectCQ = async (
    itemsModel: { [x: string]: DataModelObject },
    dataModelFilesOutDir: string,
    importLibraryToUseInGeneratedFiles: string,
    subRootDirName: string,
    nunjucksTemplate: string) => {

    const nunjucksEnv = nunjucks.configure({ autoescape: false, noCache: true })
    const withoutMeta = (__attributes: any): any => Object.keys(__attributes).reduce(
        (result, key) => {
            if (key !== '__meta') {
                Object.assign(result, { [key]: __attributes[key] })
            };
            return result
        }, {});
    nunjucksEnv.addFilter('withoutMeta', withoutMeta);
    const domainSectionNameUpper1stCase = `${subRootDirName.slice(0, 1).toUpperCase()}${plural(subRootDirName).slice(1)}`
    const domainSectionNameLower1stCase = `${subRootDirName.slice(0, 1).toLowerCase()}${plural(subRootDirName).slice(1)}`
    const injectFunctionName = `_inject${domainSectionNameUpper1stCase}`
    await mkdir(join(dataModelFilesOutDir, subRootDirName), { recursive: true })
    await writeFile(
        join(dataModelFilesOutDir, subRootDirName, `${injectFunctionName}.ts`),
        nunjucks.renderString(
            readFileSync(
                join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', `./ddb-cq-model-templates/${nunjucksTemplate}.nunjucks`)).toString(),
            { importLibraryToUseInGeneratedFiles, Items: itemsModel, injectFunctionName, dataModelSection: `${domainSectionNameLower1stCase}Map` }));

}

export const _generateInjectD = async (
    jsonDataModel: JSONDataModel, // diffeerence with commands and queries, here we need to iterate thru all Items/Commands/Queries
    dataModelFilesOutDir: string,
    importLibraryToUseInGeneratedFiles: string,
    subRootDirName: string,
    nunjucksTemplate: string) => {

        const nunjucksEnv = nunjucks.configure({ autoescape: false, noCache: true })
    const withoutMeta = (__attributes: any): any => Object.keys(__attributes).reduce(
        (result, key) => {
            if (key !== '__meta') {
                Object.assign(result, { [key]: __attributes[key] })
            };
            return result
        }, {});
    nunjucksEnv.addFilter('withoutMeta', withoutMeta);
    const domainSectionNameUpper1stCase = `${subRootDirName.slice(0, 1).toUpperCase()}${plural(subRootDirName).slice(1)}`
    const domainSectionNameLower1stCase = `${subRootDirName.slice(0, 1).toLowerCase()}${plural(subRootDirName).slice(1)}`
    const injectFunctionName = `_inject${domainSectionNameUpper1stCase}`
    await mkdir(join(dataModelFilesOutDir, subRootDirName), { recursive: true })
    await writeFile(
        join(dataModelFilesOutDir, subRootDirName, `${injectFunctionName}.ts`),
        nunjucks.renderString(
            readFileSync(
                join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', `./ddb-cq-model-templates/${nunjucksTemplate}.nunjucks`)).toString(),
            { importLibraryToUseInGeneratedFiles, ...withoutMeta(jsonDataModel), injectFunctionName, dataModelSection: `${domainSectionNameLower1stCase}Map` }));

}

export const _generateInjectDomainContext = async (dataModelFilesOutDir: string) => {
    // a static template (no replacements) for all domain context entities
    await writeFile(
        join(dataModelFilesOutDir, `injectDomainContext.ts`),
        nunjucks.renderString(
            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates/injectDomainContext.nunjucks')).toString(), { }));
}