'use client'

import styled from 'styled-components'

export const Mini = styled.div`
	height: 50px;
	width: 70px;
	background-color: grey;
`

export const ImageList = styled.div`
	display: flex;
	gap: 5px;
`

export const ProductOptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 250px;
`

export const Title = styled.span`
	color: ${({ theme }) => theme.colors.text.darkerGrey};
	font-weight: 500;
	font-size: 16px;
	text-align: center;
	margin-bottom: 15px;
	text-transform: capitalize;
`

export const Imagen = styled.div`
	aspect-ratio: 4/3;
	width: 100%;
	background-color: grey;
	margin-bottom: 5px;
`

export const Price = styled.div`
	color: ${({ theme }) => theme.colors.common.burgundy};
	font-size: 20px;
	font-weight: 500;
	text-align: center;
	margin-bottom: 15px;
`

export const AddToCart = styled.button`
	background-color: ${({ theme }) => theme.colors.common.burgundy};
	border: none;
	outline: none;
	color: white;
	font-weight: bold;
	padding: 15px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	width: 100%;
	cursor: pointer;
`

export const Line = styled.span`
	height: 0px;
	width: 100%;
	border-top: 1px solid #c0c0c0ee;
`
