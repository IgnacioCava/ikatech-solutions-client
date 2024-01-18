'use client'

import styled from 'styled-components'

export const SearchbarContainer = styled.div`
	display: flex;
	flex-direction: row;
	border: 1px solid ${({ theme }) => theme.colors.common.grey};
	align-items: center;
	height: 40px;
`

export const Chevron = styled.div`
	display: flex;
	height: 100%;
	width: 40px;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		background-color: #ade1ff;
	}
	&::before {
		border-style: solid;
		border-width: 0.15em 0.15em 0 0;
		content: '';
		display: inline-block;
		height: 0.65em;
		transform: rotate(45deg);
		vertical-align: top;
		width: 0.65em;
		box-sizing: border-box;
	}
`

export const Input = styled.input`
	padding: 10px;
	border: none;
	height: 100%;
	outline: none;
	width: 100%;
	&::placeholder {
		text-transform: uppercase;
		font-weight: bold;
	}
`
