import type { ReduxState } from '@/types/redux'

export const selectProducts = (state: ReduxState) => state.products
