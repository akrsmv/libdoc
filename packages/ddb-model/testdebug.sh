# #DEBUG
npm run build
cd dist
node --inspect-brk ./_exec_generateDataModel.js \
--dataModelsDir /home/akrsmv/inctasoft/incta/packages/ddb-model/src/__testdata__/domain-context \
--dataModelFilesOutDir /home/akrsmv/inctasoft/incta/packages/localdev-api/src/test-ddb-model-generator-output \
--globalSecondaryIndexes TITEM,sGSI1-sGSI2,sGSI1-sGSI3,sGSI1-nGSI1
cd -
