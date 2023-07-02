# NO DEBUG

# generate for test-system
npm run build
cd dist
node ./_exec_generateCQDataModel.js \
--dataModelsDir /home/akrsmv/inctasoft/incta/packages/ddb-model/src/__testdata__/domain-context-definition \
--dataModelFilesOutDir /home/akrsmv/inctasoft/incta/packages/test-system/src/domain-context \
--globalSecondaryIndexes TITEM,sGSI1-sGSI2,sGSI1-sGSI3,sGSI1-nGSI1
cd -

# generate for test suits
cd dist
node ./_exec_generateCQDataModel.js \
--dataModelsDir /home/akrsmv/inctasoft/incta/packages/ddb-model/src/__testdata__/domain-context-definition \
--dataModelFilesOutDir /home/akrsmv/inctasoft/incta/packages/ddb-cqd-model/src/__testdata__/generated \
--globalSecondaryIndexes TITEM,sGSI1-sGSI2,sGSI1-sGSI3,sGSI1-nGSI1
cd -