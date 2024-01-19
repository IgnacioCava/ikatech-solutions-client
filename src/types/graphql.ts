export type Query = {
	__typename?: 'Query'
	products: Array<Product>
}

export interface Product {
	nombre: string
	precio: number
	referencia: string
	foto: string
	slides: string[]
}

/*
    This mapped type takes a given key, which must be included within the Query type,
    and returns a type which's only property will be [property]: Query[property].
    This allows us to easily set a type for the return value of the useQuery hook.
    This might be unnecesary for this project given that we only have one operation, 
    but in a real project with dozens of operations, it becomes really handy.
    It can be expanded to accept mutations and subscriptions as well.
*/
export type OpReturnType<PropName extends keyof Omit<Query, '__typename'>> = {
	[P in PropName]: Query[P]
}
