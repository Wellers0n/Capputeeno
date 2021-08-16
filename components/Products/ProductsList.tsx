import { useEffect } from 'react'
import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import {
  ProductItem,
  ProductItemName,
  ProductItemPrice,
  ProductItemImage,
  ProductContainer
} from './styles'
// components
import Loading from '../Loading'

type ProductType = {
  category: string
  id: string
  image_url: string
  name: string
  price_in_cents: number
}

type Props = {
  page: number
}

type QueryProps = {
  allProducts: ProductType[]
}

const QUERY = gql`
  query AllProducts($page: Int, $perPage: Int) {
    allProducts(page: $page, perPage: $perPage) {
      id
      name
      category
      image_url
      price_in_cents
    }
  }
`

const Products: NextPage<Props> = ({ page }) => {
  const { data, loading, refetch } = useQuery<QueryProps>(QUERY, {
    variables: {
      page: page,
      perPage: 10
    },
    fetchPolicy: 'network-only'
  })

  useEffect(() => {
    refetch()
  }, [page])

  return (
    <ProductContainer>
      {loading ? (
        <Loading />
      ) : (
        data?.allProducts.map((product, index) => {
          return (
            <ProductItem key={index}>
              <ProductItemImage
                src={product.image_url}
                width={256}
                height={300}
                alt={product.name}
              />
              <ProductItemName>{product.name}</ProductItemName>
              <ProductItemPrice>
                R$ {product.price_in_cents / 100}
              </ProductItemPrice>
            </ProductItem>
          )
        })
      )}
    </ProductContainer>
  )
}

export default Products
