'use client'

import Image from 'next/image'
import { Mini, Info, Data, SizeList, Guide, AddToCart, Added } from './styles'
import { Section } from '@components'
import { useEffect, useState } from 'react'
import { selectProducts, useSelector, useDispatch, productSlice } from '@/lib/redux'
import { isProductOnCart, formatPrice } from '@/helpers'

export const ProductInfo = () => {
	const dispatch = useDispatch()
	const { cart } = useSelector(selectProducts)
	const { selectedProduct } = useSelector(selectProducts)
	const [size, setSize] = useState(5)

	useEffect(() => {
		setSize(5)
	}, [selectedProduct])

	if (!selectedProduct) return
	return (
		<Info>
			<Data>
				<span>{selectedProduct?.nombre}</span>
				<span>${formatPrice(selectedProduct?.precio)}</span>
				<span>Cod. de producto {selectedProduct?.referencia}</span>
			</Data>

			<Section title='color'>
				<Image
					alt='color'
					height={60}
					width={60}
					src={selectedProduct?.foto}
				/>
			</Section>

			<Section title='talla'>
				<SizeList>
					{[...Array(10)].map((_, index) => {
						const thisSize = 5 + index * 0.5
						return (
							<Mini
								key={index}
								$selected={size === thisSize}
								onClick={() => setSize(thisSize)}
							>
								{thisSize}
							</Mini>
						)
					})}
				</SizeList>
			</Section>

			<Guide>Guía de tallas</Guide>
			{isProductOnCart(cart, selectedProduct) ? (
				<Added>Agregado al carrito</Added>
			) : (
				<AddToCart onClick={() => dispatch(productSlice.actions.addToCart(selectedProduct))}>Añadir al carrito</AddToCart>
			)}
		</Info>
	)
}
