import useRoutes from '@/hooks/useRoutes'
import { Advert, Contact, HeaderContainer } from './styles'
import Link from 'next/link'

export const Header = () => {
	const { headerRoutes } = useRoutes()

	return (
		<HeaderContainer>
			<Advert>Hot sale -30% en sandalias</Advert>
			<Contact>
				{headerRoutes.map(({ label, href }) => {
					return (
						<Link
							href={href}
							key={label}
						>
							{label}
						</Link>
					)
				})}
			</Contact>
		</HeaderContainer>
	)
}
