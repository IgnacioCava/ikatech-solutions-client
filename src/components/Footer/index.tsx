import { constants } from '@/constants'
import { FooterSection } from '@components'
import Image from 'next/image'
import { facebookIcon, footerSponsors, instagramIcon } from '@assets'
import { FooterContainer, Handle, HandleText, Line, Sections, Sponsors, Socials } from './styles'

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
