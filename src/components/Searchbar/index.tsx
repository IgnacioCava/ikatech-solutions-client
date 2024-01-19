import { SearchbarProps } from '@/types/components'
import { Chevron, Input, SearchbarContainer } from './styles'

export const Searchbar = ({ placeholder }: SearchbarProps) => {
	return (
		<SearchbarContainer>
			<Input placeholder={placeholder} />
			<Chevron />
		</SearchbarContainer>
	)
}
