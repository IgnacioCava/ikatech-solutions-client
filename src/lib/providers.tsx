'use client'

/* Core */
import { Provider } from 'react-redux'
import StyledComponentsRegistry from '@/styles/registry'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
/* Instruments */
import { reduxStore } from '@/lib/redux'

export const Providers = (props: React.PropsWithChildren) => {
	return (
		<StyledComponentsRegistry>
			<ThemeProvider theme={theme}>
				<Provider store={reduxStore}>{props.children}</Provider>
			</ThemeProvider>
		</StyledComponentsRegistry>
	)
}
