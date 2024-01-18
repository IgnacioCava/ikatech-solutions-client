'use client'

import { constants } from '@/constants'
import { Searchbar } from '@components'
import Image from 'next/image'
import { facebookIcon, footerSponsors, instagramIcon } from '@assets'
import { Email, FooterContainer, Handle, HandleText, Line, Options, Section, SectionTitle, Sections, Sponsors, Socials } from './styles'

interface FooterSectionProps {
	section: {
		title: string
		options: string[]
	}
}

const FooterSection = ({ section }: FooterSectionProps) => {
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

export const Footer = () => {
	return (
		<FooterContainer>
			<Handle>
				<HandleText>@hushpuppiesco</HandleText>
				<Line />
				<Socials>
					<Image
						src={facebookIcon}
						alt='facebook'
						height={23}
					/>
					<Image
						src={instagramIcon}
						alt='instagram'
						height={23}
					/>
				</Socials>
			</Handle>
			<Sections>
				{constants.footerSections.map((section) => (
					<FooterSection
						key={section.title}
						section={section}
					/>
				))}
			</Sections>
			<Sponsors>
				<Image
					src={footerSponsors}
					alt='footer'
					height={70}
				/>
			</Sponsors>
		</FooterContainer>
	)
}
