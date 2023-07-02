# NO DEBUG
THIS_SCRIPT_PATH="$(realpath "$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"/"$(dirname "$(readlink "$0")")")"

#build the project
cd $THIS_SCRIPT_PATH/../packages/ddb-model
npm run build

cd $THIS_SCRIPT_PATH/../packages/ddb-model/dist

#generate for test-system-ddb-model TODO separate test-system project that only uses ddb-model
# cd dist
# node ./_exec_generateDataModel.js \
# --dataModelsDir /home/akrsmv/inctasoft/incta/packages/ddb-model/src/__testdata__/domain-context-definition \
# --dataModelFilesOutDir /home/akrsmv/inctasoft/incta/packages/test-system/src/domain-context \
# --globalSecondaryIndexes TITEM,sGSI1-sGSI2,sGSI1-sGSI3,sGSI1-nGSI1
# cd -

# generate for test suits
cd dist
node ./_exec_generateDataModel.js \
--dataModelsDir /home/akrsmv/inctasoft/incta/packages/ddb-model/src/__testdata__/domain-context-definition \
--dataModelFilesOutDir /home/akrsmv/inctasoft/incta/packages/ddb-model/src/__testdata__/generated \
--importLibraryToUseInGeneratedFiles ../../../../interfaces/DdbItem 
# --globalSecondaryIndexes TITEM,sGSI1-sGSI2,sGSI1-sGSI3,sGSI1-nGSI1
cd -