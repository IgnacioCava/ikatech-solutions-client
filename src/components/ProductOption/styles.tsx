'use client'

import styled, { css } from 'styled-components'

export const ImageList = styled.div`
	display: flex;
	gap: 5px;
	margin-top: 5px;
`

export const ProductOptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 250px;
	img {
		object-fit: contain;
		cursor: pointer;
	}
`

export const Title = styled.span`
	font-weight: 500;
	text-align: center;
	margin-bottom: 15px;
	text-transform: capitalize;
	${({ theme }) => css`
		color: ${theme.colors.text.darkerGrey};
		font-size: ${theme.fontSize.text};
	`}
`

export const Price = styled.div`
	font-weight: 500;
	text-align: center;
	margin-bottom: 15px;
	${({ theme }) => css`
		color: ${theme.colors.common.burgundy};
		font-size: ${theme.fontSize.price};
	`}
`

export const AddToCart = styled.button`
	height: 45px;
	border: none;
	background-color: ${({ theme }) => theme.colors.common.burgundy};
	outline: none;
	color: white;
	font-weight: bold;
	padding: 15px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	width: 100%;
	cursor: pointer;
`

export const Added = styled(AddToCart)`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.common.darkGrey};
	border: 1px solid ${({ theme }) => theme.colors.common.darkGrey};
	cursor: default;
`

export const Line = styled.span`
	height: 0px;
	width: 100%;
	border-top: 1px solid #c0c0c0ee;
`
