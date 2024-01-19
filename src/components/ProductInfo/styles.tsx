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
	height: 45px;
`

export const Added = styled(AddToCart)`
	background-color: transparent;
	${({ theme }) => css`
		color: ${theme.colors.common.darkGrey};
		border: 1px solid ${theme.colors.common.darkGrey};
	`}
	cursor: default;
`

export const Data = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: bold;
	${({ theme }) => css`
		:nth-child(1) {
			font-size: 28px;
			text-transform: uppercase;
			color: ${theme.colors.text.darkGrey};
		}
		:nth-child(2) {
			font-size: ${theme.fontSize.selectedPrice};
			color: ${theme.colors.common.burgundy};
		}
		:nth-child(3) {
			font-size: 14px;
			font-weight: 500;
			color: ${theme.colors.common.lightGrey};
		}
	`}
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;
`

export const SizeList = styled.div`
	width: fit-content;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 10px;
`

export const Mini = styled.div<{ $selected?: boolean }>`
	height: 60px;
	width: 60px;
	min-height: 60px;
	min-width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 0;
	font-weight: bold;
	cursor: pointer;
	${({ $selected, theme }) => css`
		background-color: ${theme.colors.common.lightGrey};
		color: ${theme.colors.text.darkerGrey};
		font-size: ${theme.colors.common.grey};
		${$selected && 'opacity: 0.6;'}
	`}
`
