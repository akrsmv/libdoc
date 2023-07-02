# DynamoDB Data Model

Given a data-model.json file with contents:
```json
...
"Airplane": {
            "meta": {
                "shardPeriodsOn": false,
                "shardPartitios": 1
            },
            "props": {
                "reg_uq_str": {
                    "type": "string",
                    "__sSRCH1": true,
                    "required": true,
                    "unique": true,
                    "__REF1": true
                },
                "reg_uq_number": {
                    "type": "number"
                },
                "number_of_seats": {
                    "type": "number",
                    "__nSRCH1": true,
                    "required": true
                },
                "model": {
                    "type": "string",
                    "peer": "AirplaneModel"
                },
                "manifacturer": {
                    "type": "string",
                    "peer": "AirplaneManifacturer"
                },
                "country": {
                    "type": "string",
                    "peer": "Country"
                }
            }
        }
...
```

and given a destination directory, this library will generate POJOs of the form:

```javascript
export class Airplane {
    constructor(args: any) { Object.assign(this, args) }
    reg_uq_str?: string
    reg_uq_number?: number
    number_of_seats?: number
    model?: string
    manifacturer?: string
    country?: string
}

Map<TYPE_NAME, Map<TYPE_PROP_NAME, >>
```

# Test

```bash
#> node ./packages/ddb-model/dist/index.js --dataModelJsonPath /home/akrsmv/inctasoft/repo/experiments-svelte/__mock-table-configs/data-model.json --dataModelFilesOutDir /home/
```

_domain().lookupItems.get(evnt.__typename)!.__hashKeyss is being passed to ddb methods

__hashKeyss is constructed in DynamoItem like this:
```


public static __hashKeyss: Map<string, DomainPropertyConfig<InstanceType<T>>> = hashKeyss?.reduce((accum, r) => {
                return accum.set(r.key as string, r)
            },
```