import 'styled-components'
import { theme } from '../styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {
		colors: {
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
