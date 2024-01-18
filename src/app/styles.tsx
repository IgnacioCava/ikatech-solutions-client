'use client'

import { DarkGreyText } from '@/styles/commons'
import styled, { css } from 'styled-components'

export const Guide = styled(DarkGreyText)`
	text-decoration: underline 2px ${({ theme }) => theme.colors.common.grey};
	text-transform: uppercase;
	cursor: pointer;
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
	width: 250px;
	cursor: pointer;
`

export const ProductTitle = styled(DarkGreyText)`
	padding-top: 10px;
	font-size: 16px;
	text-transform: uppercase;
`

export const Data = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: bold;
	:nth-child(1) {
		font-size: 28px;
		text-transform: uppercase;
		color: ${({ theme }) => theme.colors.text.darkGrey};
	}
	:nth-child(2) {
		font-size: 24px;
		color: ${({ theme }) => theme.colors.common.burgundy};
	}
	:nth-child(3) {
		font-size: 14px;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.common.lightGrey};
	}
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const SizeList = styled.div`
	width: fit-content;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 10px;
`

export const Images = styled.div`
	display: flex;
	flex-direction: column;
`

export const Album = styled.div`
	display: flex;
	flex-direction: row;
	padding-block: 10px;
	gap: 10px;
	width: 500px;
	overflow: auto;
	&::-webkit-scrollbar {
		width: 16px;
	}
	&::-webkit-scrollbar-track {
		background-color: #3b3b3b;
		border: 4px solid transparent;
		background-clip: padding-box;
		border-radius: 50px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: white;
		border: 5px solid transparent;
		background-clip: padding-box;
		border-radius: 50px;
	}
`

export const ProductContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 30px;
`

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 50px;
`

export const Mini = styled.div<{ $selected?: boolean }>`
	height: 60px;
	width: 60px;
	min-height: 60px;
	min-width: 60px;
	background-color: ${({ theme }) => theme.colors.common.lightGrey};
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 0;
	font-weight: bold;
	font-size: 18px;
	color: ${({ theme }) => theme.colors.text.darkerGrey};
	cursor: pointer;
	${(props) =>
		props.$selected &&
		css`
			opacity: 0.6;
		`}
`

export const Imagen = styled.div`
	height: 500px;
	width: 500px;
	background-color: grey;
`

export const LayoutContainer = styled.section`
	display: grid;
	grid-template-areas:
		'header'
		'nav'
		'main'
		'footer';
	grid-template-rows: auto auto 1fr auto;
	align-items: center;
	min-height: 100vh;
	> header {
		grid-area: header;
	}
	> nav {
		grid-area: nav;
	}
	> main {
		grid-area: main;
		height: 100%;
		padding-inline: 20%;
	}
	> footer {
		grid-area: footer;
	}
`
