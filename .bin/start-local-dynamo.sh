THIS_SCRIPT_PATH="$(realpath "$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"/"$(dirname "$(readlink "$0")")")"

docker compose -f $THIS_SCRIPT_PATH/../.docker/dynamodb-local/docker-compose.yml up -d

aws dynamodb delete-table --region eu-west-1 --table-name TEST --endpoint-url http://localhost:8000 > /dev/null
aws dynamodb create-table --region eu-west-1 --cli-input-json file://$THIS_SCRIPT_PATH/../packages/test-system/src/domain-context/aws-ddb-table-definition.json --endpoint-url http://localhost:8000 > /dev/null

aws dynamodb delete-table --region eu-west-1 --table-name TEST --endpoint-url http://localhost:8001 > /dev/null
aws dynamodb create-table --region eu-west-1 --cli-input-json file://$THIS_SCRIPT_PATH/../packages/test-system/src/domain-context/aws-ddb-table-definition.json --endpoint-url http://localhost:8001 > /dev/null
