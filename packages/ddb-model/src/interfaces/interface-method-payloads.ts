import { IDdbItemKey } from "./DdbItem"

export type GetItemProps = {
    id: IDdbItemKey[] | string[] | string,
    loadPeersInput?: DdbLoadPeersInput,
    isPublic?: boolean
}

export interface DdbLoadPeersInput {
    loadPeersLevel?: number
    peersPropsToLoad?: string[]
    projectionExpression?: string
    selectionSetGraphQL?: string
    selectionSetList?: string
}

export interface Result<TItem = any> {
    items: TItem[]
    count: number
    pageToken?: string
    excludedFromFilter?: string[]
    selectionSetList?: string[]
}