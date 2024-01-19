//import { Container, Title } from './styles'
'use client'

import { ProductOption } from '@components'
import { ProductListContainer, Products, Title } from './styles'
import { selectProducts, useSelector } from '@/lib/redux'
import { useState } from 'react'
import { ProductListProps } from '@/types/components'

export const ProductList = ({ title, recommended }: ProductListProps) => {
	const { products } = useSelector(selectProducts)
	const [randomIndex] = useState(() => (Math.random() * (products?.length || 20)) | 0)

	if (!products) return null
	return (
		<ProductListContainer>
			<Title $recommended={recommended}>{title}</Title>
			<Products>
				<ProductOption
					product={products[randomIndex]}
					recommended={recommended}
				/>
				<ProductOption
					product={products[(randomIndex + 1) % products?.length]}
					recommended={recommended}
				/>
				<ProductOption
					product={products[(randomIndex + 2) % products?.length]}
					recommended={recommended}
				/>
				<ProductOption
					product={products[(randomIndex + 3) % products?.length]}
					recommended={recommended}
				/>
			</Products>
		</ProductListContainer>
	)
}
