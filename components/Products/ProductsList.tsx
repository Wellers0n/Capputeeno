import { useEffect } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
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

type QueryProps = {
  allProducts: ProductType[]
}

const QUERY = gql`
  query AllProducts($page: Int, $perPage: Int, $filter: ProductFilter) {
    allProducts(page: $page, perPage: $perPage, filter: $filter) {
      id
      name
      category
      image_url
      price_in_cents
    }
  }
`

const Products: NextPage = () => {
  const { query } = useRouter()
  const { page = 1, category = 'all' } = query

  const filter = category !== 'all' ? { category } : undefined

  const { data, loading, refetch } = useQuery<QueryProps>(QUERY, {
    variables: {
      page: Number(page),
      perPage: 10,
      filter
    }
    // fetchPolicy: 'network-only'
  })

  useEffect(() => {
    refetch()
  }, [page, category])

  return loading ? (
    <Loading />
  ) : (
    <ProductContainer>
      {data?.allProducts.map((product, index) => {
        return (
          <Link key={index} href={`/product/${product.id}`} passHref>
            <ProductItem>
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
          </Link>
        )
      })}
    </ProductContainer>
  )
}

export default Products
