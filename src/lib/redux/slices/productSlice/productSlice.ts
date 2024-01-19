import { Product } from '@/types/graphql'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: QuerySliceState = {
	status: 'idle',
	products: null,
	selectedProduct: null,
	cart: [],
	value: 0
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		storeProducts: (state, action: PayloadAction<Product[]>) => {
			state.products = action.payload
			state.selectedProduct = action.payload[0]
		},
		selectProduct: (state, action: PayloadAction<Product>) => {
			state.selectedProduct = action.payload
		},
		addToCart: (state, action: PayloadAction<Product>) => {
			if (!state.cart.find((product) => product.nombre === action.payload.nombre)) state.cart.push(action.payload)
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			state.cart = state.cart.filter((product) => product.nombre != action.payload)
		}
	}
})

export interface QuerySliceState {
	status: 'idle' | 'loading' | 'failed'
	products: Product[] | null
	cart: Product[]
	selectedProduct: Product | null
	value: number
}
