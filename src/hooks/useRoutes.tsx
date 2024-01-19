'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const useRoutes = () => {
	const pathname = usePathname()

	const headerRoutes = useMemo(
		() => [
			{
				label: 'directorio de tiendas',
				href: '/directorio'
			},
			{
				label: 'servicio al cliente',
				href: '/servicio'
			},
			{
				label: 'mi cuenta',
				href: '/cuenta'
			}
		],
		[pathname]
	)

	const mainRoutes = useMemo(
		() => [
			{
				label: 'hombre',
				href: '/hombre',
				active: pathname === '/hombre'
			},
			{
				label: 'mujer',
				href: '/mujer',
				active: pathname === '/mujer'
			},
			{
				label: 'blog',
				href: '/blog',
				active: pathname === '/blog'
			},
			{
				label: 'historia',
				href: '/historia',
				active: pathname === '/historia'
			},
			{
				label: 'tiendas',
				href: '/tiendas',
				active: pathname === '/tiendas'
			}
		],
		[pathname]
	)

	return { mainRoutes, headerRoutes }
}

export default useRoutes
