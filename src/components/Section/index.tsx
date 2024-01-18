import { Container, Title } from './styles'

interface SectionProps {
	title: string
	children: JSX.Element
}

export const Section = ({ title, children }: SectionProps) => {
	return (
		<Container>
			<Title>{title}</Title>
			{children}
		</Container>
	)
}
