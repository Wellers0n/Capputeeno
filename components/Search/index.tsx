import type { NextPage } from 'next'
import {
  Container,
  Input,
  SearchIcon,
  WrapperSearch
} from './styles'

const Search: NextPage = () => {
  return (
    <Container>
      <WrapperSearch>
        <Input type="text" placeholder={'Procurando por algo específico?'} />
        <SearchIcon size="32" />
      </WrapperSearch>
    </Container>
  )
}

export default Search
