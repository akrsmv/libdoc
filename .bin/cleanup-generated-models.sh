THIS_SCRIPT_PATH="$(realpath "$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"/"$(dirname "$(readlink "$0")")")"
rm -fr $THIS_SCRIPT_PATH/../packages/localdev-api/src/test-ddb-model-generator-output
rm -fr $THIS_SCRIPT_PATH/../packages/test-system/src/domain-context
rm -fr $THIS_SCRIPT_PATH/../packages/ddb-model/src/__testdata__/generated
rm -fr $THIS_SCRIPT_PATH/../packages/ddb-cqd-model/src/__testdata__/generated
rm -fr $THIS_SCRIPT_PATH/../VITE/vite-project/src/graphql/generated
