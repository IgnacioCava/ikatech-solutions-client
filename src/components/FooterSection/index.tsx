import { Searchbar } from '@components'
import { Email, Options, Section, SectionTitle } from './styles'
import { FooterSectionProps } from '@/types/components'

export const FooterSection = ({ section }: FooterSectionProps) => {
	return (
		<Section>
			<SectionTitle>{section.title}</SectionTitle>
			<Options $type={section.title}>
				{section.options.map((option) => (
					<span key={option}>{option}</span>
				))}
			</Options>
			{section.title === 'Newsletter' && (
				<Email>
					<Searchbar placeholder='E-MAIL' />
				</Email>
			)}
		</Section>
	)
}
