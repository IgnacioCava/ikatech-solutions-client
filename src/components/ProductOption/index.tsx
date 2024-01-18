import { AddToCart, ImageList, Imagen, Mini, Price, ProductOptionContainer, Title, Line } from './styles'

interface ProductOptionProps {
	title: string
	price: number
	recommended?: boolean
}

export const ProductOption = ({ title, price, recommended }: ProductOptionProps) => {
	return (
		<ProductOptionContainer>
			<Imagen />
			<ImageList>
				<Mini />
				<Mini />
				<Mini />
			</ImageList>
			<Title>{title}</Title>
			<Price>${price}</Price>
			{recommended ? <Line /> : <AddToCart>Agregar al carrito</AddToCart>}
		</ProductOptionContainer>
	)
}
