'use client'

import Image from 'next/image'
/* Core */
import Link from 'next/link'

/* Instruments */
import styled, { css } from 'styled-components'
import { Searchbar } from '@components'
import { logo } from '@assets'
import useRoutes from '@/hooks/useRoutes'
import { Functionalities, Links, Logo, NavContainer, Routes, Section } from './styles'

export const Navbar = () => {
	const { mainRoutes } = useRoutes()

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
					{mainRoutes.map(({ label, href, active }) => {
						console.log(active)
						return (
							<Section
								href={href}
								key={label}
								$active={active}
							>
								{label}
							</Section>
						)
					})}
				</Routes>
			</Links>
			<Functionalities>
				<Searchbar placeholder='buscar' />

				<p>Envío gratis para pedidos superiores a $300.000</p>

				<div>Carrito 0</div>
			</Functionalities>
		</NavContainer>
	)
}
