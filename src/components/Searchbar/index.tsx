import { Chevron, Input, SearchbarContainer } from './styles'

interface SearchbarProps {
	placeholder: string
}

export const Searchbar = ({ placeholder }: SearchbarProps) => {
	return (
		<SearchbarContainer>
			<Input placeholder={placeholder} />
			<Chevron />
		</SearchbarContainer>
	)
}
