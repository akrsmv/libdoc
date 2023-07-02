THIS_SCRIPT_PATH="$(realpath "$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"/"$(dirname "$(readlink "$0")")")"

find $THIS_SCRIPT_PATH/.. -name "node_modules" -exec rm -rf '{}' +
# find $THIS_SCRIPT_PATH/.. -name "package-lock.json" -exec rm -rf '{}' +
find $THIS_SCRIPT_PATH/.. -name "dist" -exec rm -fr '{}' +
find $THIS_SCRIPT_PATH/.. -name "*.tsbuildinfo" -exec rm -fr '{}' +
rm -fr $THIS_SCRIPT_PATH/../packages/infrastructure/cdk.out
rm -fr $THIS_SCRIPT_PATH/../packages/infrastructure/schema.graphql
$THIS_SCRIPT_PATH/cleanup-generated-models.sh
