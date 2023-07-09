import * as nunjucks from 'nunjucks'
import { mkdir, writeFile } from "fs/promises";
import { join, sep, dirname } from "path";
import { readFileSync, existsSync } from "fs";
import { DataModelObject } from '@incta/ddb-model';
import { firstCaseLower, firstCaseUpper, loginfo, logwarn } from '@incta/common-utils';
import { singular, plural } from 'pluralize';

export const generateCQDImpl = async (
    itemsModel: { [x: string]: DataModelObject },
    dataModelFilesOutDir: string,
    importLibraryToUseInGeneratedFiles: string,
    subRootDirName: string,
    nunjucksTemplate: string,
    itemNameSuffix: string
) => {
    const dirsArr = dataModelFilesOutDir.split(sep).filter(notEmplty => !!notEmplty)
    const lastDirInDataModelFilesOutDirPath= dirsArr.pop()
    const dirToUse = join(sep, ...dirsArr, `${lastDirInDataModelFilesOutDirPath}-impl`, subRootDirName)
    await mkdir(dirToUse, { recursive: true })
    const nunjucksEnv = nunjucks.configure({ autoescape: false, noCache: true })
    nunjucksEnv.addFilter('firstCaseLower', firstCaseLower)
    nunjucksEnv.addFilter('plural', plural)

    const fileNameSffuix = itemNameSuffix === `${firstCaseUpper(singular(subRootDirName.replace('-impl', '')))}` ? itemNameSuffix
        : `${firstCaseUpper(singular(subRootDirName.replace('-impl', '')))}`
    for (const cq of Object.keys(itemsModel).filter(key => key !== '__meta')) {
        const scaffoldedFilePath = join(dirToUse, `${cq}${fileNameSffuix}Impl.ts`)
        if (!existsSync(scaffoldedFilePath)) {
            logwarn(`Scaffolding implementation for ${cq}: ${scaffoldedFilePath}`)
            await writeFile(
                scaffoldedFilePath,
                nunjucks.renderString(
                    readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates', `${nunjucksTemplate}.nunjucks`)).toString(),
                    { lastDirInDataModelFilesOutDirPath, importLibraryToUseInGeneratedFiles, __typename: cq, itemNameSuffix }));
        } else {
            logwarn(`Skip scaffolding for ${cq}. Implementation found at ${scaffoldedFilePath}`)
        }
    }

}