import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { Container, Title, WrapperSearch } from './styles'
import { useCart } from '../../context/cart-context'
import { useRouter } from 'next/router'
// components
import Search from '../Search'
import ShoppingIcon from '../Icons/ShoppingIcon'

const Header: NextPage = () => {
  const { state } = useCart()
  const { push } = useRouter()

  return (
    <Container>
      <Title onClick={() => push('/')}>Capputeeno</Title>
      <WrapperSearch onClick={() => push('/cart')}>
        <Search />
        <ShoppingIcon count={state.count} />
      </WrapperSearch>
    </Container>
  )
}

export default Header
