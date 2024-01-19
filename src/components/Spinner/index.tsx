import { spinner } from '@assets'
import Image from 'next/image'

export const Spinner = () => {
	return (
		<Image
			alt='loading'
			src={spinner}
			height={70}
			width={70}
		/>
	)
}
