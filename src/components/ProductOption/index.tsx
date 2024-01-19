'use client'

import { AddToCart, ImageList, Price, ProductOptionContainer, Title, Line, Added } from './styles'
import Image from 'next/image'
import { useState } from 'react'
import { productSlice, selectProducts, useDispatch, useSelector } from '@/lib/redux'
import { formatPrice, isProductOnCart } from '@/helpers'
import { ProductOptionProps } from '@/types/components'

export const ProductOption = ({ recommended, product }: ProductOptionProps) => {
	const dispatch = useDispatch()
	const { cart } = useSelector(selectProducts)
	const [randomIndex] = useState(() => (Math.random() * product.slides.length) | 0)
	const [selectedIndex, setSelectedIndex] = useState<null | number>(null)

	return (
		<ProductOptionContainer>
			<Image
				src={selectedIndex !== null ? product.slides[selectedIndex] : product.foto}
				alt='producto'
				width={250}
				height={250}
				priority
				onClick={() => {
					dispatch(productSlice.actions.selectProduct(product))
					window.scrollTo({ top: 0, behavior: 'smooth' })
				}}
			/>
			<ImageList>
				{[...Array(3)].map((_, index) => {
					const random = (randomIndex + index) % product.slides.length
					return (
						<Image
							src={index === 0 ? product.foto : product.slides[random]}
							alt='producto'
							width={70}
							height={50}
							onClick={() => setSelectedIndex(index === 0 ? null : random)}
						/>
					)
				})}
			</ImageList>
			<Title>{product.nombre}</Title>
			<Price>${formatPrice(product.precio)}</Price>
			{recommended ? (
				<Line />
			) : isProductOnCart(cart, product) ? (
				<Added>Agregado al carrito</Added>
			) : (
				<AddToCart onClick={() => dispatch(productSlice.actions.addToCart(product))}>Agregar al carrito</AddToCart>
			)}
		</ProductOptionContainer>
	)
}
