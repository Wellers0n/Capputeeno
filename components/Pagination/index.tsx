import type { NextPage } from 'next'
import { Container, Box } from './styles'
import { useRouter } from 'next/router'

type Props = {
  pages: number[]
}
const Pagination: NextPage<Props> = ({ pages }) => {
  const { query, push } = useRouter()
  const { page = 1 } = query

  // console.log(`page`, page)
  return (
    <Container>
      {pages.map((_, index) => {
        return (
          <Box
            key={index}
            active={Number(page) === index}
            onClick={() => {
              // setPage(index)
              push(`/?page=${index}`)
            }}
          >
            {index + 1}
          </Box>
        )
      })}
    </Container>
  )
}

export default Pagination
