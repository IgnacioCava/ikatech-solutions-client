'use client'

import { DarkGreyText } from '@/styles/commons'
import styled from 'styled-components'

export const Title = styled(DarkGreyText)`
	font-size: 18px;
	text-transform: uppercase;
	margin-bottom: 10px;
	padding-bottom: 5px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.common.grey};
`

export const Text = styled.span`
	color: ${({ theme }) => theme.colors.common.grey};
`

export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
`
