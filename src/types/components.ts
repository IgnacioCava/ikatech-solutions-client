import { Product } from './graphql'

export interface DetailsProps {
	title: string
	text: string
}

export interface FooterSectionProps {
	section: {
		title: string
		options: string[]
	}
}

export interface ProductListProps {
	title: string
	recommended?: boolean
}

export interface ProductOptionProps {
	recommended?: boolean
	product: Product
}

export interface SearchbarProps {
	placeholder: string
}

export interface SectionProps {
	title: string
	children: JSX.Element
}
