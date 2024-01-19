'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'

export const Links = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Functionalities = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	> p {
		color: ${({ theme }) => theme.colors.common.burgundy};
	}
	> a {
		font-weight: 500;
	}
`

export const NavContainer = styled.nav`
	background-color: white;
	padding: 10px 20%;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid ${({ theme }) => theme.colors.common.grey};
	text-transform: uppercase;
	justify-content: space-between;
	position: sticky;
	top: 0;
	z-index: 1;
`

export const Routes = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
`

export const Section = styled(Link)<{ $active?: boolean }>`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.text.darkGrey};
	font-weight: 500;
	&:hover {
		opacity: 0.8;
	}
	${(props) =>
		props.$active &&
		css`
			text-decoration: underline;
		`}
`

export const Logo = styled(Section)`
	height: 80px;
	width: fit-content;
	position: relative;
	img {
		width: fit-content !important;
		object-fit: contain;
		object-position: left;
	}
`
