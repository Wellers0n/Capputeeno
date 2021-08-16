import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #dedede;
  padding-bottom: 64px;
`

export const Navigation = styled.nav`
  width: 100%;
  max-width: 1440px;
  margin: auto;
`

export const ProductContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 24px;
  column-gap: 34px;
  border-radius: 4px 4px 0px 0px;
`

export const ProductItem = styled.div`
  width: 256px;
  border-radius: 4px 4px 0px 0px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProductItemName = styled.div`
  padding: 8px 0;
  width: 228px;
`

export const ProductItemPrice = styled.div`
  border-top: 1px solid #dce2e5;
  color: #09090a;
  width: 228px;
  padding: 8px 0px;
  font-weight: bold;
`

export const ProductItemImage = styled(Image)`
  border-radius: 4px 4px 0px 0px;
`
