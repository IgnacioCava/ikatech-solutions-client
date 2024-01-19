'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`

export const Back = styled(Link)`
	background-color: ${({ theme }) => theme.colors.common.burgundy};
	padding: 15px;
	width: fit-content;
	color: white;
	font-weight: 500;
`
