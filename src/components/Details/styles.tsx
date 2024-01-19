'use client'

import { DarkGreyText } from '@/styles/commons'
import styled, { css } from 'styled-components'

export const Title = styled(DarkGreyText)`
	text-transform: uppercase;
	margin-bottom: 10px;
	padding-bottom: 5px;
	${({ theme }) => css`
		border-bottom: 1px solid ${theme.colors.common.grey};
		font-size: ${theme.fontSize.sectionHeader};
	`}
`

export const Text = styled.span`
	color: ${({ theme }) => theme.colors.common.grey};
`

export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
`
