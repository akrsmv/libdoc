#!/bin/bash
ENV=$1
THIS_SCRIPT_PATH="$(realpath "$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"/"$(dirname "$(readlink "$0")")")"

for f in $(cat $THIS_SCRIPT_PATH/env-vars/$ENV.env); 
do 
    echo $f;
    export $f; 
done