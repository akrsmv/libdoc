import { DdbLoadPeersInput } from "@incta/ddb-cqd-model"


export interface DispatchActionInput {
    meta: {
        "__typename": string,
        "action": "create" | "update" | "patch" | "delete" | "start" | "stop" | "query" | "search" | "get"
    }
    arguments: any
    selectionSetList?: string[] | string | undefined
    selectionSetGraphQL?: string | undefined
    projectionExpression?: string | undefined
    loadPeersInput?: DdbLoadPeersInput
}

export const CRUD_INPUT_ACTIONS = ["create", "update", "patch", "delete", "query", "search", "get"];
export const CQ_INPUT_ACTIONS = ["start", "stop"];
export const VALID_INPUT_ACTIONS = CRUD_INPUT_ACTIONS.concat(CQ_INPUT_ACTIONS);
