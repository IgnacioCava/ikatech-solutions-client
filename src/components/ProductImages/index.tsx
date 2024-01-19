'use client'

import Image from 'next/image'
import { Images, Album, MainVisualizer } from './styles'
import { selectProducts, useSelector } from '@/lib/redux'
import { useEffect, useState } from 'react'
import { Spinner } from '@components'

export const ProductImages = () => {
	const { selectedProduct } = useSelector(selectProducts)
	const [selectedIndex, setSelectedIndex] = useState<null | number>(null)
	const [loading, setLoading] = useState(false)
	const [cachedIndexes, setCachedIndexes] = useState<number[]>([])

	useEffect(() => {
		setSelectedIndex(null)
	}, [selectedProduct])

	useEffect(() => {
		if (!selectedIndex) return
		if (cachedIndexes.includes(selectedIndex)) return
		setCachedIndexes((cache) => [...cache, selectedIndex])
		setLoading(true)
	}, [selectedIndex])

	if (!selectedProduct) return null
	const { slides, foto } = selectedProduct
	return (
		<Images>
			<MainVisualizer>
				<Image
					src={selectedIndex !== null ? slides[selectedIndex] : foto}
					alt='producto'
					height={500}
					width={500}
					priority
					onLoad={() => setLoading(false)}
				/>
				{loading && <Spinner />}
			</MainVisualizer>

			<Album>
				{slides.map((url, index) => (
					<Image
						src={url}
						alt='variaciones'
						key={url}
						height={60}
						width={60}
						priority
						onClick={() => setSelectedIndex(index)}
					/>
				))}
			</Album>
		</Images>
	)
}
