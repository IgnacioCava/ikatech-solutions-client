import { Product } from '@/types/graphql'

export const isProductOnCart = (cart: Product[], product: Product) => {
	return cart.find((item) => item.nombre === product.nombre)
}

export function formatPrice(number: number) {
	let numberString = String(number)

	// Use regular expression to add dots every three digits from the end
	numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

	return numberString
}
