'use client'

import styled from 'styled-components'

export const HeaderContainer = styled.header`
	margin: auto;
	display: flex;
	font-weight: bold;
	flex-direction: column;
	text-transform: uppercase;
	width: 100%;
`

export const Advert = styled.div`
	background-color: ${({ theme }) => theme.colors.common.burgundy};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	font-size: 20px;
	line-height: 10px;
	color: white;
	width: 100%;
`

export const Contact = styled.div`
	background-color: ${({ theme }) => theme.colors.common.lightGrey};
	height: 30px;
	width: 100%;
	text-align: end;
	font-size: 12px;
	gap: 10px;
	padding-inline: 20%;
	display: flex;
	align-items: center;
	justify-content: end;
	color: ${({ theme }) => theme.colors.text.darkerGrey};
`
