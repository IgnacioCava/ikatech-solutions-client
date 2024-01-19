'use client'

import styled, { css } from 'styled-components'

export const Email = styled.div`
	margin-top: 15px;
	width: 100%;
`

export const Section = styled.div`
	display: flex;
	flex-direction: column;
`

export const SectionTitle = styled.span`
	font-weight: 500;
	margin-bottom: 15px;
	font-size: 1.2rem;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.text.darkerGrey};
`
export const Options = styled.div<{ $type: string }>`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	text-transform: uppercase;
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.text.darkGrey};
	${(props) =>
		props.$type != 'Newsletter' &&
		css`
			> span {
				cursor: pointer;
				&:hover {
					color: grey;
				}
			}
		`}
`
