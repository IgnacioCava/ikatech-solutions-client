'use client'

import { DarkGreyText } from '@/styles/commons'
import styled from 'styled-components'

export const Title = styled(DarkGreyText)`
	font-size: ${({ theme }) => theme.fontSize.text};
	text-transform: uppercase;
	margin-bottom: 10px;
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	> img {
		object-fit: contain;
		border: 1px solid ${({ theme }) => theme.colors.common.grey};
		cursor: pointer;
	}
`
