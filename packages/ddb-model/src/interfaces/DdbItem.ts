import { ValidationError, uuid } from "@incta/common-utils";
import { JSONDataModel, GsiKey } from "./DataModel";
import { JSONTableModel } from "./TableModel";

export const _sGSIKeyPrefix = "sGSI"
export const _nGSIKeyPrefix = "nGSI"
export const _sep1 = "|"
export const _sep2 = "#"
export const _default_agent_id = `Agent${_sep1}DEFAULT${_sep2}v_0|Agent|DEFAULT`

/**
 * Prepends `__prefix` to `str` ONLY IF `__prefix` is truthy AND str is of type string
 * @param str 
 * @param bypassPrefix if true, will return `str` nomatter of `prefix` value
 * @param __prefix 
 * @returns 
 */
export const withPrefix = <T = string | number>(str: T, dontApplyPrefix: boolean, identity: Partial<IIdentity<Partial<IClaims>>> | null) => {
    if (!dontApplyPrefix) {
        if (identity) {
            if (typeof str === 'string') {
                const __prefix = `${identity?.sub}${_sep1}-${_sep1}${!identity?.claims?.active_agent || identity?.claims?.active_agent === 'undefined' ? _default_agent_id : identity?.claims?.active_agent}`
                if (__prefix !== `${_sep1}-${_sep1}${_default_agent_id}`) {// i.e empty prefix
                    return str.startsWith('^' + __prefix + '^') ? str : '^' + __prefix + '^' + str
                }
            }
        }
    }
    return str
}

export const prefixPattern = /\^[^\^]+\^/g
export const withoutPrefix = (str: string) => str.replace(prefixPattern, '')

// export type IIdentity = { username?: string, sub?: string, groups?: string[], preferredIamRole?: string, dbUser?: IInctaUserItem, preffered_tenant?: string }
export interface IInctaUserItem extends DdbItem {   // GENERIC MEANING
    email?: string;                 // email
    sub?: string;                   // id
    active_role?: string;           // active_role
    roles?: string[];               // visible_roles
    groups?: string[];              // groups   
    userPoolId?: string;            // identity_provider_id
    agents?: string[];              // visible_agents
    active_agent?: string;          // active_agent
}

export type IClaims = {
    'custom:agents': string,
    sub: string,
    'custom:active_agent': string,
    'cognito:groups': string[],
    email_verified: boolean,
    'cognito:preferred_role': string,
    iss: string,
    'cognito:username': string,
    agents: string[],
    origin_jti: string,
    active_agent: string,
    'cognito:roles': string[],
    aud: string,
    event_id: string,
    token_use: string,
    auth_time: number,
    exp: number,
    iat: number,
    jti: string,
    email: string
}

export type IIdentity<TClaims = IClaims> = {
    claims: TClaims,
    defaultAuthStrategy: string,//'ALLOW',
    groups: string[],
    issuer: string,
    sourceIp: string[],
    sub: string,
    username: string
}
/**
 * Object that is ready for insert/update in dynamodb 
 */
export interface DdbItem extends IDdbItemBaseProps {
    [x: string]: any
}

/** class decorator allowing for defining both static and nonstatic fields on a class */
// export function staticImplements<T>() {
//     return <U extends T>(constructor: U) => { constructor };
// }
export function staticImplements<T>() {
    return (_constructor: T) => { };
}
/**
 * Dynamo table primary and range keys
 */
export interface IDdbItemKey {
    HASH: string
    RANGE: string
    id?: string
    rev?: number
}

/**
 * Properties added on top of a domain item properties, supporting DynamoDB storage
 */
export interface IDdbItemBaseProps extends IDdbItemKey {
    [x: string]: any
    id: string
    __typename: string
    date_created: Date
    date_updated: Date

    TITEM?: string
    checksum?: string

    user_created?: string
    user_updated?: string
    __usr?: string
    __agt?: string

    privateData?: boolean
    publicData?: boolean

    ringToken?: string
    item_state?: string
    __proc?: string
}

/**
 * Static metadata for a dynamo item
 */
export interface IDdbItemStaticMetadata<T> {
    new(args?: any): T;
    __typename: string;
    __parent_typename: string;
    isPublicItem: boolean
    keys: Map<string, string>;
    requiredKeys: string[];
    uniqueKeys: string[];
    peerKeys: Map<string, string>;
    gsiKeys: Map<string, string[]>;
    metadataPerKey: DdbItemPropertiesMetadataMap<T>;
}

/**
 * interface methods for plugging additional logic before executing create, update or delete
 */
export interface IDdbDomain<T extends DdbItem> {
    [action: string]: any // (item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null) => Promise<void>
    validateGet(item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>
    validateQuery(item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>
    validateCreate(item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>
    validateUpdate(item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>
    validatePatch(item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>
    validateDelete(item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>
    onCreate(item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>
    onUpdate(item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>
    onPatch(item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>
    onDelete(item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>
}
export interface IDdbCommand<T extends DdbCommandItem> extends IDdbDomain<T> {
    [action: string]: any // (item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null) => Promise<void>
    start(command: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>;
    validateStart(command: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>;
    onCommandCompleted(command: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>;
    onCommandErrored(command: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>;
}
export interface IDdbAsyncCommand<T extends DdbAsyncCommandItem> extends IDdbDomain<T> {
    [action: string]: any // (item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null) => Promise<void>
    start(command: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>;
    validateStart(command: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>;
    onSingleCommandEventError(command: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>;
    onCommandCompleted(command: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>;
    onCommandErrored(command: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>;
}
export interface IDdbQuery<T extends DdbQueryItem> extends IDdbDomain<T> {
    [action: string]: any // (item: T, identity: Partial<IIdentity<Partial<IClaims>>> | null) => Promise<void>
    // TODO change return type to be a Result<XYZ> where XYZ should be defined as a return data type in domain-context
    // and corresponding graphql type and typeConnection should be generated. ?
    // OR to return <Result<DdbItem>> and AllTypesUnion graphql to be used in schema? (no need to define exact types in data model)
    start(query: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>;
    validateStart(query: T, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void>
}
/**
 * An empty metadata container
 */
export const EMPTY_ITEM_METADATA = {
    __typename: 'undefined',
    __parent_typename: 'undefined',
    keys: new Map<string, string>(),
    requiredKeys: [] as string[],
    uniqueKeys: [] as string[],
    peerKeys: new Map<string, string>(),
    hashKeys: new Map<string, string[]>(),
    rangeKeys: new Map<string, string[]>(),
    metadataPerKey: new Map<keyof IDdbItemBaseProps, DdbItemPropertiesMetadataMap<DdbItem | DdbCommandItem | DdbQueryItem | DdbAsyncCommandItem>>()
} as unknown as IDdbItemStaticMetadata<DdbItem>

/**
 * Metadata for an individual Item's property
 */
export type DomainPropertyMetadata<T> = {
    key: keyof IDdbItemBaseProps | keyof T
    gsiKeys?: GsiKey[]
    peer?: string
    unique?: boolean
    HASH?: boolean
    required?: boolean
    type: "object" | "object[]" | "string" | "string[]" | "number" | "enum" | "isodatestring"
    enumValues?: string[]
    objectTypeDtoName?: string
}
export type ItemsMap<T extends DdbItem> = Map<string, IDdbItemStaticMetadata<T>>
export type DomainsMap<T extends DdbItem> = Map<string, IDdbDomain<T>>
export type DomainCommandsMap<T extends DdbCommandItem> = Map<string, IDdbCommand<T>>
export type DomainAsyncCommandsMap<T extends DdbAsyncCommandItem> = Map<string, IDdbAsyncCommand<T>>
export type DomainQueriesMap<T extends DdbQueryItem> = Map<string, IDdbQuery<T>>
export type DdbItemPropertiesMetadataMap<T> = Map<keyof IDdbItemBaseProps | keyof T, DomainPropertyMetadata<T>>

export const hashRangeSplitRegex = new RegExp(`${_sep2}(v_\d+${_sep1})`)

export const existingPKWithoutPrefix = (__typename: string | null, input: IncommingPK, version: number = 0): IDdbItemKey => {
    if (!input) {
        throw new Error("unknown input for making PK");
    }
    if (typeof input === 'string') {
        // see if both HASH and RANGE provided by concatenation with `_sep2`
        const refsplit = withoutPrefix(input).split(_sep2)
        //prefix with __typename if not already prefixed
        const HASH = refsplit.length >= 1 && (!__typename || refsplit[0].startsWith(__typename)) ? refsplit[0] : `${__typename}${_sep1}${refsplit[0]}`
        //if RANGE provided as part of string passed, use it directly, otherwise try to infer based on HASH provided
        const RANGE = refsplit.length >= 2 && !!refsplit[1] ? refsplit[1] : `${versionString(version)}${_sep1}${HASH}`
        return { HASH, RANGE, id: `${HASH}${_sep2}${RANGE}` }
    } else if (typeof input === "object" && !!input.HASH && !!input.RANGE) {
        const hashNoPrefix = withoutPrefix(input.HASH)
        const rangeNoPrefix = withoutPrefix(input.RANGE)
        return { HASH: hashNoPrefix, RANGE: rangeNoPrefix, id: `${hashNoPrefix}${_sep2}${rangeNoPrefix}` }
    } else {
        throw new Error("[existingPKWithoutPrefix] unknown input for making PK");
    }
}

export const newPK = (__typename: string, __parent_typename: string): IDdbItemKey => {
    const
        i = uuid(),
        HASH = `${__typename}${_sep1}${i}`,
        RANGE = `${versionString(0)}${_sep1}${__parent_typename}${_sep1}${i}`
    return { HASH, RANGE, id: `${HASH}${_sep2}${RANGE}` }
}

/**
 * either the object {HASH, RANGE} or the string HASH#RANGE
 */
export type IncommingPK = string | { HASH: string, RANGE: string }

export const versionString = (nr: number) => `v_${nr}`

export const removeVersionString = (str: string) => str.replace(/v_\d+\|/ig, '')

//-------------
/**
 * The minimum global context required for @incta/ddb-model operations
 */
export interface IDomainContext {
    jsonDataModel?: JSONDataModel
    jsonTableModel?: JSONTableModel

    dataItemsMap?: ItemsMap<DdbItem>
    commandItemsMap?: ItemsMap<DdbCommandItem>
    queryItemsMap?: ItemsMap<DdbQueryItem>

    domainsMap?: DomainsMap<DdbItem>
    queriesMap?: DomainQueriesMap<DdbQueryItem>
    commandsMap?: DomainCommandsMap<DdbCommandItem>
    asyncCommandsMap?: DomainCommandsMap<DdbAsyncCommandItem>

}

let _domain: IDomainContext

export const setDomainContext = (ctx: Partial<IDomainContext>) => {
    _domain = Object.assign(_domain || {}, ctx)
}

export const __createItem = (item: Record<string, any>, identity: Partial<IIdentity<Partial<IClaims>>> | null): DdbItem => {
    if (!item.__typename) {
        throw new ValidationError("[__createItem] atempt to prepare dynamo item without specifying __typename")
    }
    const domain = __domain()
    if (!domain.dataItemsMap?.has(String(item.__typename))) {
        throw new ValidationError("[__createItem] invalid __typename");
    }
    try {
        const ctr = _domain.dataItemsMap?.get(item.__typename) || _domain.queryItemsMap?.get(item.__typename) || _domain.commandItemsMap?.get(item.__typename)
        return new ctr!({ args: item, identity })
    } catch (error) {
        throw error
    }
}

export const __itemMetadata = (item: Record<string, any> | string | undefined): IDdbItemStaticMetadata<DdbItem> => {
    if (typeof item === "object" && "__typename" in item) {
        return _domain.dataItemsMap?.get(item.__typename) || EMPTY_ITEM_METADATA
    } else if (typeof item === "string") {
        return _domain.dataItemsMap?.get(item) || EMPTY_ITEM_METADATA
    } else {
        return EMPTY_ITEM_METADATA
    }
}

export const __dataModel = () => {
    if (!_domain || !_domain.jsonDataModel) {
        throw new Error("[__dataModel] Domain context not initialized or bad data model")
    }
    return _domain.jsonDataModel
}

export const __domain = () => {
    if (!_domain) {
        throw new Error("[__domain] Domain context not initialized or bad data model")
    }
    return _domain
}

export const __tableModel = () => {
    if (!_domain || !_domain.jsonTableModel) {
        throw new Error("[__tableModel] Domain context not initialized or bad table model")
    }
    return _domain.jsonTableModel
}

//---------------- SYNC Commands --------------------------

/**
 * Properties added on top of a domain item properties, supporting DynamoDB storage
 */
export interface IDdbCommandItemBaseProps extends IDdbItemBaseProps {
    [x: string]: any
}

export interface DdbCommandItem extends IDdbCommandItemBaseProps {
    [x: string]: any
}

export type DomainCommandItemsMap = Map<string, IDdbItemStaticMetadata<DdbCommandItem>>
export type DdbCommandItemPropertiesMetadataMap<T> = Map<keyof IDdbCommandItemBaseProps | keyof T, DomainPropertyMetadata<T>>

//---------------- ASYNC Commands --------------------------
// TODO not implemented
/**
 * Properties added on top of a domain item properties, supporting DynamoDB storage
 */
export interface IDdbAsyncCommandItemBaseProps extends IDdbItemBaseProps {
    [x: string]: any
    total_events: number
    success_events: number
    errored_events: number
}

export interface DdbAsyncCommandItem extends IDdbAsyncCommandItemBaseProps {
    [x: string]: any
    total_events: number
    success_events: number
    errored_events: number
}

export type DomainAsyncCommandItemsMap = Map<string, IDdbItemStaticMetadata<DdbAsyncCommandItem>>
export type DdbAsyncCommandItemPropertiesMetadataMap<T> = Map<keyof IDdbAsyncCommandItemBaseProps | keyof T, DomainPropertyMetadata<T>>

// ===================================================

//---------------- Queries --------------------------

/**
 * Properties added on top of a domain item properties, supporting DynamoDB storage
 */
export interface IDdbQueryItemBaseProps extends IDdbItemBaseProps {
    [x: string]: any
}

export interface DdbQueryItem extends IDdbQueryItemBaseProps {
    [x: string]: any
}

export type DomainQueryItemsMap = Map<string, IDdbItemStaticMetadata<DdbQueryItem>>
export type DdbQueryItemPropertiesMetadataMap<T> = Map<keyof IDdbQueryItemBaseProps | keyof T, DomainPropertyMetadata<T>>

// ===================================================