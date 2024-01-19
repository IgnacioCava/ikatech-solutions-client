'use client'

import styled from 'styled-components'

export const Sponsors = styled.div`
	position: relative;
	width: fit-content;
	height: 70px;
	margin: 10px auto;
	> img {
		width: fit-content !important;
		object-fit: contain;
		object-position: center;
	}
`

export const HandleText = styled.span`
	font-size: 38px;
	color: ${({ theme }) => theme.colors.common.darkGrey};
	text-transform: uppercase;
`

export const Line = styled.div`
	height: 2px;
	width: 135px;
	background-color: ${({ theme }) => theme.colors.common.darkGrey};
`

export const Handle = styled.div`
	background-color: ${({ theme }) => theme.colors.background.lightGrey};
	width: 100%;
	padding-block: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`

export const FooterContainer = styled.footer`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	height: fit-content;
`

export const Sections = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
	justify-content: space-between;
	padding: 25px 20% 40px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.common.lightGrey};
`

export const Socials = styled.div`
	display: flex;
	flex-direction: row;
	gap: 15px;
	margin-block: 10px 15px;
	> img {
		cursor: pointer;
	}
`
