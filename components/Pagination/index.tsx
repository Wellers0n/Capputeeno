import type { NextPage } from 'next'
import { Container, Box } from './styles'

type Props = {
  pages: number[]
  page: number
  setPage: Function
}
const Pagination: NextPage<Props> = ({ pages, setPage, page }) => {
  return (
    <Container>
      {pages.map((_, index) => {
        return (
          <Box
            key={index}
            active={page === index}
            onClick={() => setPage(index)}
          >
            {index + 1}
          </Box>
        )
      })}
    </Container>
  )
}

export default Pagination
