import { MainImage, NameSection, OptionsSection, SliderImage, Container, Data, Images, SliderImages } from './styles'

export const SkeletonLoader = () => {
	return (
		<Container>
			<Images>
				<MainImage />
				<SliderImages>
					<SliderImage />
					<SliderImage />
					<SliderImage />
				</SliderImages>
			</Images>
			<Data>
				<NameSection />
				<OptionsSection />
			</Data>
		</Container>
	)
}
