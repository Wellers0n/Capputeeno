import type { NextPage } from 'next'
import { Container, Title, WrapperSearch } from './styles'
// components
import Search from '../Search'
import ShoppingIcon from '../Icons/ShoppingIcon'

const Header: NextPage = () => {
  return (
    <Container>
      <Title>Capputeeno</Title>
      <WrapperSearch>
        <Search />
        <ShoppingIcon count={0}/>
      </WrapperSearch>
    </Container>
  )
}

export default Header
