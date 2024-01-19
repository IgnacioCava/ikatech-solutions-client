import { DetailsProps } from '@/types/components'
import { DetailsContainer, Title, Text } from './styles'

export const Details = ({ title, text }: DetailsProps) => {
	return (
		<DetailsContainer>
			<Title>{title}</Title>
			<Text>{text}</Text>
		</DetailsContainer>
	)
}
