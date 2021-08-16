import { useState } from 'react'
import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import { Container, Navigation } from './styles'

// components
import Pagination from '..//Pagination'
import ProductsList from './ProductsList'

type QueryProps = {
  _allProductsMeta: { count: number }
}

const QUERY = gql`
  query count {
    _allProductsMeta {
      count
    }
  }
`

const Products: NextPage = () => {
  const [page, setPage] = useState(0)

  const { data } = useQuery<QueryProps>(QUERY)

  const totalPageCount = Math.ceil(data?._allProductsMeta?.count / 10)

  const pages = Array.from({ length: totalPageCount }, (_, index) => index)

  return (
    <Container>
      <Navigation>
        <Pagination pages={pages} page={page} setPage={setPage} />
      </Navigation>
      <ProductsList page={page} />
    </Container>
  )
}

export default Products
