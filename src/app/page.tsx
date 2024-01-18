'use client'

import { Details, ProductList, ProductOption, Section } from '@/components'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import { constants } from '../constants'
import { DarkGreyText } from '@/styles/commons'
import { AddToCart, Album, Content, Data, Guide, Imagen, Images, Info, Mini, ProductContainer, ProductTitle, SizeList } from './styles'

export default function Product() {
	const [name, setName] = useState('zapatilla hombre pelikan')
	const [price, setPrice] = useState('$10.000')
	const [size, setSize] = useState(5)

	return (
		<ProductContainer>
			<ProductTitle>Hushpuppiesco / calzado / {name}</ProductTitle>
			<Content>
				<Images>
					<Imagen />

					<Album>
						{[...Array(15)].map((e, i) => (
							<Mini key={i} />
						))}
					</Album>
				</Images>

				<Info>
					<Data>
						<span>{name}</span>
						<span>{price}</span>
						<span>Cod. de producto zap-005</span>
					</Data>

					<Section title='color'>
						<Mini />
					</Section>

					<Section title='talla'>
						<SizeList>
							{[...Array(10)].map((e, i) => {
								const thisSize = 5 + i * 0.5
								return (
									<Mini
										key={i}
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

					<AddToCart>Añadir al carrito</AddToCart>
				</Info>
			</Content>
			<Details
				title='detalles de producto'
				text={constants.lorem}
			/>
			<Details
				title='tecnologías'
				text={constants.lorem2}
			/>

			<ProductList title='completá tu look' />
			<ProductList
				title='productos recomendados'
				recommended
			/>
		</ProductContainer>
	)
}
