import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { toast } from 'react-toastify'
import { API } from 'aws-amplify'
import { GraphQLQuery } from "@aws-amplify/api"
import { getUserVisibleAgents } from '../graphql/queries'
import { ChangeActiveAgent } from '../graphql/mutations'
import * as graphqlTypes from '../graphql/API'

interface UserVisibleAgentsStore {
    userObject: graphqlTypes.User | null | undefined
    setUserObject: (sub: string) => void
    resetUserObject: () => void
    createPrivateAgentForUser: (sub?: string | null) => void
    changeActiveAgent: (newActiveAgentId: string, sub: string) => void
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
                        createPrivateAgentForUser: async (sub) => {
                            if (sub) {
                                console.log('will create new agent for user: ', sub)
                            } else {
                                console.log('user sub is undefined')
                            }
                        },
                        setUserObject: async (sub) => {
                            const userObject = await loadUser(sub)
                            set(() => ({ userObject }))
                        },
                        resetUserObject: () => set({ userObject: null }),
                        changeActiveAgent: async (newActiveAgentId: string, sub: string) => {
                            try {
                                const result = await API.graphql<GraphQLQuery<graphqlTypes.ChangeActiveAgent>>({
                                    query: ChangeActiveAgent,
                                    variables: { input: { new_active_agent: newActiveAgentId } }
                                }).catch((data: any) => {
                                    toast.error(data?.errors); return data
                                })

                                if (result.data?.ChangeActiveAgent?.status !== 200) {
                                    toast.error(result.data?.ChangeActiveAgent?.errorMessage)
                                }

                                if (!result.data) {
                                    toast.error(result.errors[0]?.message)
                                }
                            } catch (err: any) {
                                toast.error('CATCH ' + err?.errorMessage)
                            }

                            const userObject = await loadUser(sub)

                            set(() => ({ userObject }))
                        }
                    }
                })
            , { name: 'user-agents' }
        )
    )
)

const loadUser = async (sub: string) => {
    let result: { data: any }
    try {
        result = await API.graphql<GraphQLQuery<any>>({
            query: getUserVisibleAgents,
            variables: { id: [`User|${sub}#v_0|User|${sub}`] }
        }).catch((data: any) => {
            console.log('AAASSSYYYNNNNCCC  EEERRRROOOORRR', data)
            toast.error(data?.errors); return data
        })

        // if (result.data?.getAgents?.status !== 200) {
        //     toast.error(result.data?.getAgents?.errorMessage)
        // }

        // if (!result.data) {
        //     toast.error(result.data.getAerrors[0]?.message)
        // }
        return result.data.getUsers?.items[0]
    } catch (err: any) {
        console.log('EEERRRROOOORRR', err)

        toast.error('CATCH ' + err?.errorMessage)
    }
}