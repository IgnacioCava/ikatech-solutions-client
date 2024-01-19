'use client'

import { Details, ProductImages, ProductInfo, ProductList, SkeletonLoader, Spinner } from '@components'
import { constants } from '../constants'
import { Content, ProductContainer, ProductTitle } from './styles'
import useProducts from '@/hooks/useProducts'

export default function Product() {
	const { selectedProduct, loading } = useProducts()

	if (loading || !selectedProduct) return <SkeletonLoader />
	return (
		<ProductContainer>
			<ProductTitle>Hushpuppiesco / calzado / {selectedProduct.nombre}</ProductTitle>
			<Content>
				<ProductImages />
				<ProductInfo />
			</Content>

			<Details
				title='detalles de producto'
				text={constants.lorem}
			/>
			<Details
				title='tecnologías'
				text={constants.lorem2}
			/>

			<ProductList title='completa tu look' />
			<ProductList
				title='productos recomendados'
				recommended
			/>
		</ProductContainer>
	)
}
