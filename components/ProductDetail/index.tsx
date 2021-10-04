import { gql, useQuery } from '@apollo/client'
import { translate } from '../../helpers'
import {
  Container,
  Header,
  BackButton,
  Main,
  ProductImage,
  Content,
  Title,
  CategoryInfo,
  Info,
  DescriptionTitle,
  Description,
  Price,
  Button
} from './styles'
import Loading from '../Loading'
import { useCart } from '../../context/cart-context'
// next
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'

const QUERY = gql`
  query Product($id: ID!) {
    Product(id: $id) {
      name
      category
      description
      image_url
      price_in_cents
    }
  }
`

type ProductType = {
  category: string | undefined
  id: string
  image_url: string
  name: string
  price_in_cents: number
  description: string
}

type QueryProps = {
  Product: ProductType
}

const ProductDetail: NextPage = () => {
  const { back, query } = useRouter()
  const { dispatch } = useCart()
  const { data, loading } = useQuery<QueryProps>(QUERY, {
    variables: {
      id: query.id
    }
    // fetchPolicy: 'network-only'
  })

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Header>
        <BackButton onClick={() => back()}>
          <Image
            src={require('../../public/back.png')}
            width={24}
            height={24}
            alt={'back'}
          />
          <p>Voltar</p>
        </BackButton>
      </Header>
      <Main>
        <ProductImage
          src={data?.Product?.image_url}
          width={640}
          height={580}
          alt={data?.Product?.name}
        />
        <Content>
          <div>
            <CategoryInfo>{translate[data?.Product.category]}</CategoryInfo>
            <Title>{data?.Product?.name}</Title>
            <Price> R$ {data?.Product.price_in_cents / 100}</Price>
            <Info>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </Info>
            <DescriptionTitle>Descrição</DescriptionTitle>
            <Description>{data?.Product?.description}</Description>
          </div>
          <div>
            <Button
              onClick={() => {
                
                dispatch({ payload: { data }, type: 'increment' })
              }}
            >
              <Image
                src={require('../../public/shopping-bag.png')}
                width={24}
                height={24}
                alt={'shopping-bag'}
              />
              <div>Adicionar ao carrinho</div>
            </Button>
          </div>
        </Content>
      </Main>
    </Container>
  )
}

export default ProductDetail
