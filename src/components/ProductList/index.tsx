//import { Container, Title } from './styles'
'use client'

import styled, { css } from 'styled-components'
import { ProductOption } from '@components'
import { ProductListContainer, Products, Title } from './styles'

interface ProductListProps {
	title: string
	recommended?: boolean
}

export const ProductList = ({ title, recommended }: ProductListProps) => {
	return (
		<ProductListContainer>
			<Title $recommended={recommended}>{title}</Title>
			<Products>
				<ProductOption
					title='zapatilla hombre pelikan'
					price={1000}
					recommended={recommended}
				/>
				<ProductOption
					title='zapatilla hombre pelikan'
					price={1000}
					recommended={recommended}
				/>
				<ProductOption
					title='zapatilla hombre pelikan'
					price={1000}
					recommended={recommended}
				/>
				<ProductOption
					title='zapatilla hombre pelikan'
					price={1000}
					recommended={recommended}
				/>
			</Products>
		</ProductListContainer>
	)
}
