import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { GraphQLQuery } from "@aws-amplify/api"
import { toast } from 'react-toastify'
import { API } from 'aws-amplify'
import { CommandResult } from '../graphql/API'
import { useBlurringSpinnerStore } from './BlurringSpinnerStore'

interface BackendRequestsStore {
    isSigningOut: boolean,
    backendGraphqlCall: <TInput, TResult>(input: TInput, query: string) => Promise<TResult>,
    setIsSigningOut: (isSigningOut: boolean) => void
}

export const useBackendRequestsStore = create<BackendRequestsStore>()(
    devtools((set) =>
    ({
        isSigningOut: false,
        setIsSigningOut: (isSigningOut) => set((state) => ({
            ...state,
            isSigningOut
        })),
        backendGraphqlCall: async <TInput, TResult>(input: TInput, query: string) => {
            console.log('ENTERING backendGraphqlCall, ', input, query);
            try {
                useBlurringSpinnerStore.getState().setLoading(true)
                const result = await API.graphql<GraphQLQuery<TResult>>({
                    query,
                    variables: { input }
                }).catch((data: any) => {
                    toast.error(data?.errors); return data
                })
                useBlurringSpinnerStore.getState().setLoading(false)

                for (const graphqlResult in result.data) {
                    const singleResult = result.data[graphqlResult] as CommandResult
                    if (singleResult && singleResult.status && singleResult.status !== 200) {
                        const errMsg = singleResult.errors? singleResult.errors.map(e => e?.message).join(";") : 'Something go wrong, please contact support'
                        toast.error('Oops, ' + errMsg, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
                    }
                }
                
                if (!result.data) {
                    toast.error(result.errors?.map((e: any) => e.message).join(";"))
                }

                return result
            } catch (err: any) {
                toast.error('Oops, ' + err?.message)
            }
        }
    })
    )
)