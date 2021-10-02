import styled, { css } from 'styled-components'
import Image from 'next/image'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background-color: #dedede;
  padding-bottom: 64px;
`

export const Navigation = styled.nav`
  width: 100%;
  height: auto;
  max-width: 1440px;
  margin: auto;
  > div:nth-child(2) {
    justify-content: flex-end;
    height: 80px;
  }
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

export const Categories = styled.div<{ activeIndex: number }>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    li {
      text-decoration: none;
    }
  }

  ${({ activeIndex }) => {
    return css`
      .active-${activeIndex} {
        color: #41414d;
        display: block;
        border-bottom: 4px solid #ffa585;
        padding-bottom: 4px;
      }
    `
  }}
`

export const CategoryItem = styled.a`
  font-family: 'Saira', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 40px;
  color: #737380;
  display: block;
  border-bottom: 4px solid transparent;
  padding-bottom: 4px;


`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

export const Bottom = styled.div`
  display: flex;
`
