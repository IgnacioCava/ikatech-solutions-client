import 'styled-components'
import { theme } from '../styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {
		fontSize: {
			productTitle: string
			selectedPrice: string
			price: string
			sectionHeader: string
			text: string
			footerOption: string
		}
		colors: {
			loader: {
				lightGrey: string
			}
			common: {
				lightGrey: string
				grey: string
				darkGrey: string
				burgundy: string
			}
			background: {
				lightGrey: string
			}
			text: {
				darkGrey: string
				darkerGrey: string
			}
		}
	}
}
