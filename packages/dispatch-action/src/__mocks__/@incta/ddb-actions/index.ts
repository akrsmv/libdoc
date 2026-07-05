import { DdbLoadPeersInput } from "@incta/ddb-cqd-model"

export const getItems = jest.fn(() => Promise.resolve({items:[{}]}))
export const queryItems = jest.fn(() => Promise.resolve({items:[{}]}))
export const createItem = jest.fn(() => Promise.resolve({}))
export const updateItem = jest.fn(() => Promise.resolve())
export const patchItem = jest.fn(() => Promise.resolve())
export const deleteItem = jest.fn(() => Promise.resolve())
export const EMPTY_LOAD_PEERS_INPUT: { loadPeersInput: DdbLoadPeersInput } = {
    loadPeersInput: {
        loadPeersLevel: 0,
        peersPropsToLoad: []
    }
}

