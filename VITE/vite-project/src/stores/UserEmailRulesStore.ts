import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { createUserEmailRule } from '../graphql/mutations'
import * as graphqlTypes from '../graphql/API'
import { useBackendRequestsStore } from './BackendRequestsStore'
import { useUserVisibleAgentsStore } from './VisibleAgentsStore'

export const cognitoMaxLokupAttemptsGuard = 10

interface UserEmailRulesStore {
    userEmailRules: graphqlTypes.UserEmailRule[]
    createUserEmailRule: (userId?: string | null, sub?: string | null, agentId?:  string | null , email?: string | null, matchingPattern?: string | null) => Promise<void>
    loadUserEmailRules: (userId?: string | null) => Promise<void>
}

export const useUserEmailRulesStore = create<UserEmailRulesStore>()(
    devtools(
        persist(
            subscribeWithSelector(
                (set) => {
                    return {
                        userEmailRules: [],
                        createUserEmailRule: async (userId, sub, agentId, email, matchingPattern) => {
                            await useBackendRequestsStore.getState()
                                .backendGraphqlCall<graphqlTypes.UserEmailRuleInput, { data: graphqlTypes.CreateUserEmailRuleMutation }>(
                                    {
                                        // id: `UserEmailRule|${email}#UserEmailRule|${new Date().getTime()}`, // TODO fix creation of is in backend / Domain object
                                        agent: agentId,
                                        email: email, //TODO change passing this instead of id ^^
                                        user: userId,
                                        sub: sub,
                                        match_pattern: matchingPattern
                                    }, createUserEmailRule)
                        },
                        loadUserEmailRules: async () => {
                            const result = await useBackendRequestsStore.getState()
                                .backendGraphqlCall<graphqlTypes.QueryUserEmailRulesInput, { data: graphqlTypes.QueryUserEmailRulesQuery }>(
                                    {
                                        hashKey: {
                                            user: { eq: useUserVisibleAgentsStore.getState().userObject?.RANGE }
                                        },//`UserEmailRule|${email}#UserEmailRule|${new Date().getTime()}`, // TODO fix creation of is in backend / Domain object
                                        rangeKey: {
                                            RANGE: { eq: 'UserEmailRule'}
                                        },
                                        dbIndexName: 'RANGE-TITEM',
                                    }, createUserEmailRule)
                                    set((state) => ({state, userEmailRules: result.data.queryUserEmailRules?.items}))
                        }
                    }
                })
            , { name: 'user-agents' }
        )
    )
)