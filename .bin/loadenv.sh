#!/bin/bash
ENV=$1
# THIS_SCRIPT_PATH="$(realpath "$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"/"$(dirname "$(readlink "$0")")")"
echo $THIS_SCRIPT_PATH
echo "${BASH_SOURCE[0]}"
echo "$(dirname "${BASH_SOURCE[0]}")"
echo "$(dirname "$(realpath "${BASH_SOURCE[0]}")")"
THIS_SCRIPT_PATH="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"

for f in $(cat $THIS_SCRIPT_PATH/env-vars/$ENV.env); 
do 
    echo $f;
    export $f; 
done

for f in $(cat $THIS_SCRIPT_PATH/../.secret/env-vars/$ENV.env); 
do 
    echo $f;
    export $f; 
done
