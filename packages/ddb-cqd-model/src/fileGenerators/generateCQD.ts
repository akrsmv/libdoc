import * as nunjucks from 'nunjucks'
import { mkdir, writeFile } from "fs/promises";
import { join, sep } from "path";
import { readFileSync } from "fs";
import { DataModelObject } from '@incta/ddb-model';
import { firstCaseLower, firstCaseUpper } from '@incta/common-utils';
import { singular } from 'pluralize';

export const generateCQD = async (
    itemsModel: { [x: string]: DataModelObject },
    dataModelFilesOutDir: string,
    importLibraryToUseInGeneratedFiles: string,
    subRootDirName: string,
    nunjucksTemplate: string,
    itemNameSuffix: string
) => {
    await mkdir(join(dataModelFilesOutDir, subRootDirName), { recursive: true })
    const nunjucksEnv = nunjucks.configure({ autoescape: false, noCache: true })
    nunjucksEnv.addFilter('firstCaseLower', firstCaseLower)

    const fileNameSffuix = itemNameSuffix === firstCaseUpper(singular(subRootDirName)) ? itemNameSuffix
        : `${itemNameSuffix}${firstCaseUpper(singular(subRootDirName))}`
    for (const cq of Object.keys(itemsModel).filter(key => key !== '__meta')) {

        await writeFile(
            join(dataModelFilesOutDir, subRootDirName, `${cq}${fileNameSffuix}.ts`),
            nunjucks.renderString(
                readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', './ddb-cq-model-templates', `${nunjucksTemplate}.nunjucks`)).toString(),
                { importLibraryToUseInGeneratedFiles, __typename: cq, itemNameSuffix }));
    }

}