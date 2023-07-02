# DynamoDB Data Model

Given a JSON metadata, generate POJO objects representing dynamo items
---

Metadata info:
JSON file name = javascript POJO name created. Dynamo item name will be `<JSON file name>Item`

- `__meta/__desc` will be added as /** ...* on top of POJO definition

- `__meta/__shardPeriodsOn` __TODO__
- `__meta/__shardPartitios` __TODO__
- `__meta/__name` __TODO__
- `__meta/__resultTypename` __TODO__
- `__meta/__lambdaAction` __TODO__

- `__meta/__desc` will be added as /** ...* on top of POJO definition

- `__props` section contains all dynamo item attribute definitions

- `__props/<prop-name>` is a dynamo item attribute

- `__props/<prop-name>/__type` secifies the dynamo item attribute type
  - `__type=string` will specify creating dynamo attribute of type `S`
  - `__type=number` will specify creating dynamo attribute of type `N`
  - `__type=isodatestring` will specify creating dynamo attribute of type `S`, and will ensure value is ISO 8601 date string 
  - `__type=enum` will specify creating dynamo attribute of type `S`, and will ensure value is one of `__enum__values` specified
    - `__enum__values=enum_val1|enum_val2....` specifies possible enum values
    - `__enum__name=<pojo_name>` specifies javascript pojo name
  - `__type={..JSON..}` will specify creating dynamo attribute of type `M`
    - `{..JSON..}` may contain same metadata as top level JSON with the following differences
    -  corresponding javascript POJO name that will be created is taken from `__meta/__name`
    - `__rangeKeys` and `__hashKeys` cannot be used in nested JSONs
    - `__unique` and `__required` cannot be used in nested JSONs
  - __TODO__ what happens with __type=string[], or __type=enum[] or __type=isodatestring[] or __type=number[] __or__ __type={..JSON..}[]__

- `__unique=true|false` if true will forbid that another Dynamo Item of same type to have the same attr value

- `__required=true|false` if true will forbid that Dynamo Item if this attr value is not set

- `__hashKeys=[]` is used to specifies if this attr vaslue participate in secondary indexing. See __hashKeys section below

- `__rangeKeys=[]` is used to specifies if this attr vaslue participate in secondary indexing. See __hashKeys section below

- `__id=true|false` specifies if this attr value should be used as Dynamo item id(PK). See __id section below

__id
---


__hashKeys
---
An array of strings, specifying into which index keys an attribute value will be copied. 
Possible values are:
```
"__REF1" | "__REF2" | "__REF3" | "__REF4" | "__REF5" | "__REF6" | "__REF7" | "__REF8" | "__REF9" | "__REF10" |
"__REF11" | "__REF12" | "__REF13" | "__REF14" | "__REF15" | "__REF16" | "__REF17" | "__REF18" | "__REF19"
```
WARNING in a paricular Dynamo item definition (a single JSON file), each of above values may appear only once. 


__rangeKeys
---

An array of strings, specifying into which index keys an attribute value will be copied. 
Possible values are:
```
// search key names of type number
"__nSRCH1" | "__nSRCH2" | "__nSRCH3" | "__nSRCH4" | "__nSRCH5" | "__nSRCH6" | "__nSRCH7" | "__nSRCH8" | "__nSRCH9" | "__nSRCH10" |
"__nSRCH11" | "__nSRCH12" | "__nSRCH13" | "__nSRCH14" | "__nSRCH15" | "__nSRCH16" | "__nSRCH17" | "__nSRCH18" | "__nSRCH19" |
// search key names of type string
"__sSRCH1" | "__sSRCH2" | "__sSRCH3" | "__sSRCH4" | "__sSRCH5" | "__sSRCH6" | "__sSRCH7" | "__sSRCH8" | "__sSRCH9" | "__sSRCH10" |
"__sSRCH11" | "__sSRCH12" | "__sSRCH13" | "__sSRCH14" | "__sSRCH15" | "__sSRCH16" | "__sSRCH17" | "__sSRCH18" | "__sSRCH19"
```
WARNING in a paricular Dynamo item definition (a single JSON file), each of above values may appear only once. 