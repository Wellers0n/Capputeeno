import styled from 'styled-components'
import { ShoppingBagOutline } from '@styled-icons/evaicons-outline/ShoppingBagOutline'

export const Container = styled.div`
  display: flex;
  position: relative;
`

export const Icon = styled(ShoppingBagOutline)`
  width: 29px;
  height: 29px;
  font-weight: bold;
  color: #737380;
`

export const Pointer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  font-weight: 500;
  font-size: 10px;
  background: #de3838;
  position: absolute;
  bottom: -6px;
  right: -5px;
  color: #fff;
`
