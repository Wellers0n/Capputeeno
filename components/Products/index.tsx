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
  const { push, query } = useRouter()

  const { category = 'all' } = query

  const filter = category !== 'all' ? { category } : undefined

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
          <Categories categoryActive={category}>
            <ul>
              <li>
                <CategoryItem
                  className={`active-all`}
                  onClick={() => {
                    push(`/?page=0&category=all`)
                  }}
                >
                  Todos os produtos
                </CategoryItem>
              </li>
              <li>
                <CategoryItem
                  className={`active-t-shirts`}
                  onClick={() => {
                    push(`/?page=0&category=t-shirts`)
                  }}
                >
                  Camisetas
                </CategoryItem>
              </li>
              <li>
                <CategoryItem
                  className={`active-mugs`}
                  onClick={() => {
                    push(`/?page=0&category=mugs`)
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
      <ProductsList />
    </Container>
  )
}

export default Products
