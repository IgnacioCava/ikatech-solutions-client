'use client'

import { Provider as ReduxProvider } from 'react-redux'
import StyledComponentsRegistry from '@/styles/registry'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@/graphql/apolloClient'
import theme from '@/styles/theme'
import { reduxStore } from '@/lib/redux'

export const Providers = (props: React.PropsWithChildren) => {
	return (
		<StyledComponentsRegistry>
			<ThemeProvider theme={theme}>
				<ApolloProvider>
					<ReduxProvider store={reduxStore}>{props.children}</ReduxProvider>
				</ApolloProvider>
			</ThemeProvider>
		</StyledComponentsRegistry>
	)
}
