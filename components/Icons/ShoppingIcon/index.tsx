import type { NextPage } from 'next'
import { Container, Icon, Pointer } from './styles'

type Props = {
  count: number
}
const ShoppingIcon: NextPage<Props> = ({ count = 0 }) => {
  return (
    <Container>
      <Icon />
      <Pointer>{count}</Pointer>
    </Container>
  )
}

export default ShoppingIcon
