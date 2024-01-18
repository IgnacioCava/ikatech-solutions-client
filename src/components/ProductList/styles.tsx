'use client'

import styled, { css } from 'styled-components'

export const ProductListContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const Products = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
	flex-wrap: wrap;
	/* display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	} */
`

export const Title = styled.span<{ $recommended?: boolean }>`
	text-transform: uppercase;
	margin-bottom: 5px;
	font-size: 18px;
	font-weight: 500;
	${({ $recommended, theme }) =>
		$recommended
			? css`
					border-bottom: 1px solid ${theme.colors.common.grey};
					color: ${theme.colors.text.darkGrey};
					padding-block: 5px;
				`
			: css`
					background-color: ${theme.colors.background.lightGrey};
					color: ${theme.colors.text.darkerGrey};
					padding: 5px;
				`}
`
