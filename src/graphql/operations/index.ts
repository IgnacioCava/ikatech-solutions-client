import { gql } from '@apollo/client'

export default {
	Queries: {
		products: gql`
			query products {
				products {
					nombre
					precio
					referencia
					foto
					slides
				}
			}
		`
	}
}
