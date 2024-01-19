'use client'

import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
	margin: auto;
	display: flex;
	font-weight: bold;
	flex-direction: column;
	text-transform: uppercase;
	width: 100%;
`

export const Advert = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	line-height: 10px;
	color: white;
	width: 100%;
	${({ theme }) => css`
		background-color: ${theme.colors.common.burgundy};
		font-size: ${theme.fontSize.price};
	`}
`

export const Contact = styled.div`
	height: 30px;
	width: 100%;
	text-align: end;
	gap: 10px;
	padding-inline: 20%;
	display: flex;
	align-items: center;
	justify-content: end;
	${({ theme }) => css`
		background-color: ${theme.colors.common.lightGrey};
		color: ${theme.colors.text.darkerGrey};
		font-size: ${theme.fontSize.footerOption};
	`}
`
