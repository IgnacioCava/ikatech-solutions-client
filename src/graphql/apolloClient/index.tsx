import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client'

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_API_URI || 'http://localhost:4000/graphql',
	cache: new InMemoryCache()
})

interface ApolloProviderProps {
	children: React.ReactNode
}

export const ApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => {
	return <Provider client={client}>{children}</Provider>
}
