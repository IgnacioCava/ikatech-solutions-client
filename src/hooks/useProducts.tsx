import operations from '@/graphql/operations'
import { useSelector, useDispatch, selectProducts, productSlice } from '@/lib/redux'
import { OpReturnType } from '@/types/graphql'
import { useQuery } from '@apollo/client'

const useProducts = () => {
	const dispatch = useDispatch()
	const { products, selectedProduct } = useSelector(selectProducts)
	const { loading, error } = useQuery<OpReturnType<'products'>>(operations.Queries.products, {
		onCompleted: (data) => {
			if (data.products) dispatch(productSlice.actions.storeProducts(data.products))
		}
	})

	return { products, selectedProduct, loading, error }
}

export default useProducts
