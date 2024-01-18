'use client'

import { Providers } from '@/lib/providers'
import '../styles/globals.css'
import { LayoutContainer } from './styles'
import { Footer, Navbar, Header } from '@components'

export default function RootLayout(props: React.PropsWithChildren) {
	return (
		<Providers>
			<html lang='en'>
				<body>
					<LayoutContainer>
						<Header />
						<Navbar />
						<main>{props.children}</main>
						<Footer />
					</LayoutContainer>
				</body>
			</html>
		</Providers>
	)
}
