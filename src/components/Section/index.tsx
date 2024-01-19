import { SectionProps } from '@/types/components'
import { Container, Title } from './styles'

export const Section = ({ title, children }: SectionProps) => {
	return (
		<Container>
			<Title>{title}</Title>
			{children}
		</Container>
	)
}
