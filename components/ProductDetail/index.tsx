import type { NextPage } from 'next'
import { Container, Header, BackButton } from './styles'
import Router from 'next/router'

const ProductDetail: NextPage = () => {
  return (
    <Container>
      <Header>
        <BackButton onClick={() => Router.back()}>Voltar</BackButton>
      </Header>
    </Container>
  )
}

export default ProductDetail
