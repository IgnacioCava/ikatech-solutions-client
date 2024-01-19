'use client'

import { DarkGreyText } from '@/styles/commons'
import styled from 'styled-components'

export const ProductTitle = styled(DarkGreyText)`
	padding-top: 10px;
	font-size: ${({ theme }) => theme.fontSize.text};
	text-transform: uppercase;
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
	@media (max-width: 1200px) {
		flex-direction: column;
	}
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
		display: flex;
		padding-inline: 20%;
		align-items: center;
		justify-content: center;
	}
	> footer {
		grid-area: footer;
	}
`
