'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Searchbar } from '@components'
import { logo } from '@assets'
import useRoutes from '@/hooks/useRoutes'
import { Functionalities, Links, Logo, NavContainer, Routes, Section } from './styles'
import { selectProducts, useSelector } from '@/lib/redux'

export const Navbar = () => {
	const { mainRoutes } = useRoutes()
	const { cart } = useSelector(selectProducts)

	return (
		<NavContainer>
			<Links>
				<Logo href={'/'}>
					<Image
						src={logo}
						alt='logo'
						height={75}
						priority
					/>
				</Logo>
				<Routes>
					{mainRoutes.map(({ label, href, active }) => (
						<Section
							href={href}
							key={label}
							$active={active}
						>
							{label}
						</Section>
					))}
				</Routes>
			</Links>
			<Functionalities>
				<Searchbar placeholder='buscar' />

				<p>Envío gratis para pedidos superiores a $300.000</p>

				<Link href={'/carrito'}>Carrito {cart.length}</Link>
			</Functionalities>
		</NavContainer>
	)
}
