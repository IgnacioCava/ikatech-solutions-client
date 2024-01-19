'use client'

import styled from 'styled-components'

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
	> img {
		cursor: pointer;
		object-fit: scale-down;
	}
	&::-webkit-scrollbar {
		width: 16px;
	}
	&::-webkit-scrollbar-track {
		background-color: ${({ theme }) => theme.colors.common.darkGrey};
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

export const MainVisualizer = styled.div`
	position: relative;
	:nth-child(1) {
		object-fit: contain;
		padding-bottom: 10px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.common.grey};
	}
	:nth-child(2) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
`
