import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface BlurringSpinnerStore {
    loading: boolean
    isLoadingUserObject: boolean
    setIsLoadingUserObject: (isLoadingUserObject: boolean) => void
    setLoading: (isLoading: boolean) => void
}

export const useBlurringSpinnerStore = create<BlurringSpinnerStore>()(
    devtools((set) =>
    ({
        loading: false,
        isLoadingUserObject: false,
        setLoading: (isLoading) => set((state) => ({
            ...state,
            loading: isLoading
        })),
        setIsLoadingUserObject: (isLoadingUserObject) => set((state) => ({ ...state, isLoadingUserObject }))
    })
    )
)