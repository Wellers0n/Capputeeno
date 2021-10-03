import { useState } from 'react'
import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import { Container, Navigation, Categories, CategoryItem, Top } from './styles'
import { useRouter } from 'next/router'

// components
import Pagination from '..//Pagination'
import ProductsList from './ProductsList'

type QueryProps = {
  _allProductsMeta: { count: number }
}

const QUERY = gql`
  query count($filter: ProductFilter) {
    _allProductsMeta(filter: $filter) {
      count
    }
  }
`

const Products: NextPage = () => {
  const { query } = useRouter()
  
  // const [page, setPage] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [category, setCategory] = useState('')

  const filter = category ? { category } : undefined

  const { data } = useQuery<QueryProps>(QUERY, {
    variables: {
      filter
    }
    // fetchPolicy: 'network-only'
  })

  const totalPageCount = Math.ceil(data?._allProductsMeta?.count / 10)

  const pages = Array.from({ length: totalPageCount }, (_, index) => index)

  return (
    <Container>
      <Navigation>
        <Top>
          <Categories activeIndex={activeIndex}>
            <ul>
              <li>
                <CategoryItem
                  className={`active-0`}
                  onClick={() => {
                    setCategory('')
                    setActiveIndex(0)
                  }}
                >
                  Todos os produtos
                </CategoryItem>
              </li>
              <li>
                <CategoryItem
                  className={`active-1`}
                  onClick={() => {
                    setCategory('t-shirts')
                    setActiveIndex(1)
                  }}
                >
                  Camisetas
                </CategoryItem>
              </li>
              <li>
                <CategoryItem
                  className={`active-2`}
                  onClick={() => {
                    setCategory('mugs')
                    setActiveIndex(2)
                  }}
                >
                  Canecas
                </CategoryItem>
              </li>
            </ul>
          </Categories>
          <div>organization</div>
        </Top>
        <Pagination pages={pages} />
      </Navigation>
      <ProductsList category={category} />
    </Container>
  )
}

export default Products
