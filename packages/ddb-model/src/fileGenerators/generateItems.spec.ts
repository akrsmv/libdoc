import { describe, jest, expect, test, beforeEach, afterEach } from '@jest/globals';

/* TODO: implement snapshot tests for all file generators*/
const expectedDynamoItemJsObjectDefinitionContents = 
` 
import { FlightTickets_priceDto } from '../dtos/FlightTickets_priceDto'
import {
  DomainPropertyMetadata,
  existingPKWithoutPrefix,
  IDdbItemBaseProps,
  IDdbItemKey,
  IDdbItemStaticMetadata,
  newPK, staticImplements
} from '../../../interfaces/DdbItem'


export class Flight implements IDdbItemBaseProps {
  static __typename = "Flight"
  static __parent_typename = "Flight"
  static keys: Map<string, string> = new Map<string, string>([
    ['from_airport','string'], 
    ['to_airport','string'], 
    ['start_date','Date'], 
    ['end_date','Date'], 
    ['duration_hours','number'], 
    ['tickets_price','FlightTickets_priceDto'], 
    ['airplane','string'], 
    ['date_created','Date'], 
    ['date_updated','Date']
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
    ['from_airport','Location'], 
    ['to_airport','Location'], 
    ['airplane','Airplane'], 
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = ['from_airport', 'to_airport', 'start_date', 'end_date', 'airplane']
  static hashKeys:Map<string, string[]> = new Map<string, string[]>([['from_airport',['__REF1']], ['to_airport',['__REF2']], ['airplane',['__REF3']]])
  static rangeKeys:Map<string, string[]> = new Map<string, string[]>([])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof Flight, DomainPropertyMetadata<Flight>> = new Map<keyof IDdbItemBaseProps | keyof Flight, DomainPropertyMetadata<Flight>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['from_airport', {
      key: 'from_airport',
      type: 'string',
      hashKeys: ['__REF1'],
      peer: 'Location',
      required: true,
    }], 
    ['to_airport', {
      key: 'to_airport',
      type: 'string',
      hashKeys: ['__REF2'],
      peer: 'Location',
      required: true,
    }], 
    ['start_date', {
      key: 'start_date',
      type: 'isodatestring',
      required: true,
    }], 
    ['end_date', {
      key: 'end_date',
      type: 'isodatestring',
      required: true,
    }], 
    ['duration_hours', {
      key: 'duration_hours',
      type: 'number',
    }], 
    ['tickets_price', {
      key: 'tickets_price',
      type: 'object', objectTypeDtoName: 'FlightTickets_priceDto',
    }], 
    ['airplane', {
      key: 'airplane',
      type: 'string',
      hashKeys: ['__REF3'],
      peer: 'Airplane',
      required: true,
    }], 
    ['date_created', {
      key: 'date_created',
      type: 'isodatestring',
    }], 
    ['date_updated', {
      key: 'date_updated',
      type: 'isodatestring',
    }]
  ])
  //#region the mandatory keys from IDdbItemBaseProps
  __typename: string
  id: string
  meta: string
  date_created: Date
  date_updated: Date
  //#endregion
  constructor(args?: any) {
    Object.assign(this, typeof args === "object"
      && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
        if (Flight.metadataPerKey.has(arg as keyof Flight)
          
          // && Flight.metadataPerKey.get(arg as keyof Flight)?.type === typeof args[arg]
          ) {
          validArgs[arg] = args[arg]
        }
        return validArgs
      }, {})
    )

    let pk: IDdbItemKey
    if (!!args?.id && !!args?.meta) {
      pk = existingPKWithoutPrefix(Flight.__typename, { id: args.id, meta: args.meta })
    } else {
      pk = newPK(Flight.__typename, Flight.__typename)
    }
    this.__typename = Flight.__typename
    this.id = pk.id
    this.meta = pk.meta
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public from_airport?: string
  public to_airport?: string
  public start_date?: Date
  public end_date?: Date
  public duration_hours?: number
  public tickets_price?: FlightTickets_priceDto
  public airplane?: string
}
`

const expectedDtoPojoJSObjectContents = 
`

export class FlightTickets_priceDto {  
  public class_vip?: number
  public class_1?: number
  public class_2?: number
}
`

describe('For every domain context json, generate at least two JS classes:', () => {
    test('Always create a class with all necessary info for inserting in DDB', () => {
    })
    test('Always create a classDto that is to carry only domain secific data', () => {
    })
    test('If a domain context json also includes in-json POJO definitions then create Dtos for them', () => {
    })
});