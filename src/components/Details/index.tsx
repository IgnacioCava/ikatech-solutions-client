import { DetailsContainer, Title, Text } from './styles'

interface DetailsProps {
	title: string
	text: string
}

export const Details = ({ title, text }: DetailsProps) => {
	return (
		<DetailsContainer>
			<Title>{title}</Title>
			<Text>{text}</Text>
		</DetailsContainer>
	)
}
