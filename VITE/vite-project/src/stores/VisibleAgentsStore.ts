import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { getUserVisibleAgents } from '../graphql/queries'
import { ChangeActiveAgent, createPrivateAgentForUser, deleteAgent } from '../graphql/mutations'
import * as graphqlTypes from '../graphql/API'
import { useBackendRequestsStore } from './BackendRequestsStore'

export const cognitoMaxLokupAttemptsGuard = 10

interface UserVisibleAgentsStore {
    userObject: graphqlTypes.User | null | undefined
    isLoadingUserObject: boolean
    unsuccessfulCognitoLookupAttempts: number
    setUserObject: (sub: string, attemptsNr: number) => Promise<void>
    resetUserObject: () => void
    createPrivateAgentForUser: (sub?: string | null, agentName?: string | null, agentCode?: string | null) => Promise<void>
    changeActiveAgent: (newActiveAgentId: string, sub: string) => Promise<void>
    deleteAgent: (sub: string, agentId: string, agentRev: number) => Promise<void>
}

/**
 * Couple of elements within the system have their ids registered in 
 * GctAppInfo.hoveredElementsOfInterest map
 * 
 * This stores globally the last hovered element that has an id
 * 
 * Once the store changes, the GctAppInfo element positioned at the moment in the footer
 * will display the description assigned for a particular id
 */
export const useUserVisibleAgentsStore = create<UserVisibleAgentsStore>()(
    devtools(
        persist(
            subscribeWithSelector(
                (set) => {
                    return {
                        userObject: null,
                        isLoadingUserObject: false,
                        unsuccessfulCognitoLookupAttempts: 0,
                        createPrivateAgentForUser: async (sub, agentName, agentCode) => {
                            await useBackendRequestsStore.getState()
                                .backendGraphqlCall<graphqlTypes.CreatePrivateAgentForUserInput, graphqlTypes.CreatePrivateAgentForUser>
                                ({
                                    user: `User|${sub}#v_0|User|${sub}`, agentItem: { name: agentName, code: agentCode }
                                }, createPrivateAgentForUser)
                            const userObject = await loadUser(String(sub))
                            set(() => ({ userObject }))
                        },
                        setUserObject: async (sub, attemptsNr) => {
                            console.log('[setUserObject] invoked with ', sub, attemptsNr)
                            if ((!attemptsNr && attemptsNr !== 0) || attemptsNr > cognitoMaxLokupAttemptsGuard) {
                                console.log(`Failed to get cognito user for more than ${cognitoMaxLokupAttemptsGuard} attempts. Please contact support`);
                                return;
                            }
                            console.log("loading cognito user: " + attemptsNr + " attempt")
                            const userObject = await loadUser(sub)
                            if (!userObject) {
                                set((state) => ({ userObject, unsuccessfulCognitoLookupAttempts: state.unsuccessfulCognitoLookupAttempts + 1 }))
                            } else {
                                set(() => ({ userObject, unsuccessfulCognitoLookupAttempts: 0 }))
                            }
                        },
                        resetUserObject: () => set({ userObject: null, unsuccessfulCognitoLookupAttempts: 0 }),
                        changeActiveAgent: async (newActiveAgentId: string, sub: string) => {
                            await useBackendRequestsStore.getState().backendGraphqlCall<graphqlTypes.ChangeActiveAgentInput, graphqlTypes.ChangeActiveAgent>({ new_active_agent: newActiveAgentId }, ChangeActiveAgent)
                            const userObject = await loadUser(sub)
                            set(() => ({ userObject }))
                        },
                        deleteAgent: async (sub, agentId, agentRev) => {
                            await useBackendRequestsStore.getState().backendGraphqlCall<graphqlTypes.ItemIdentifierInput, { data: graphqlTypes.DeleteAgentMutation }>({ id: agentId, rev: agentRev || 0 }, deleteAgent)
                            const userObject = await loadUser(sub)
                            set((state) => ({ ...state, userObject }))
                        }
                    }
                })
            , { name: 'user-agents' }
        )
    )
)

const loadUser = async (sub: string) => {
    let result: { data: any }
    result = await useBackendRequestsStore.getState().backendGraphqlCall<graphqlTypes.ItemIdentifierInput[], { data: graphqlTypes.GetUsersQuery }>([{ id: `User|${sub}#v_0|User|${sub}` }], getUserVisibleAgents)
    return result.data.getUsers?.items[0]
}