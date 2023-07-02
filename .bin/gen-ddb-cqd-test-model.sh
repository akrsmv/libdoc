# NO DEBUG
THIS_SCRIPT_PATH="$(realpath "$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"/"$(dirname "$(readlink "$0")")")"

#build the project
cd $THIS_SCRIPT_PATH/../packages/ddb-cqd-model
npm run build

cd $THIS_SCRIPT_PATH/../packages/ddb-cqd-model/dist

# generate for test-system
cd dist
node ./_exec_generateCQDataModel.js \
--generateHollowImplFiles true \
--dataModelsDir /home/akrsmv/inctasoft/incta/packages/ddb-model/src/__testdata__/domain-context-definition \
--dataModelFilesOutDir /home/akrsmv/inctasoft/incta/packages/test-system/src/domain-context 
# --globalSecondaryIndexes TITEM,sGSI1-sGSI2,sGSI1-sGSI3,sGSI1-nGSI1
cd -

# generate for test suits
cd dist
node ./_exec_generateCQDataModel.js \
--dataModelsDir /home/akrsmv/inctasoft/incta/packages/ddb-model/src/__testdata__/domain-context-definition \
--dataModelFilesOutDir /home/akrsmv/inctasoft/incta/packages/ddb-cqd-model/src/__testdata__/generated 
# --globalSecondaryIndexes TITEM,sGSI1-sGSI2,sGSI1-sGSI3,sGSI1-nGSI1,NSHARD-TITEM
cd -