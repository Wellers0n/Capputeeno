import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dedede;
  padding-bottom: 64px;
`

export const Header = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`

export const BackButton = styled.div`
  color: #617480;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  p:last-child {
    margin-left: 8px;
  }
`

export const Main = styled.div`
  width: 100%;
  max-width: 1440px;
  height: auto;
  display: flex;
  margin: auto;
`

export const ProductImage = styled(Image)`
  border-radius: 4px 4px 0px 0px;
`

export const Content = styled.div`
  margin-left: 32px;
  width: 448px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CategoryInfo = styled.div`
  font-weight: 400;
  font-family: 'Saira', sans-serif;
  font-size: 16px;
  color: #41414d;
  font-style: normal;
`

export const Title = styled.div`
  font-weight: 300;
  font-family: 'Saira', sans-serif;
  font-size: 32px;
  font-style: normal;
  color: #41414d;
  margin-top: 12px;
`

export const Price = styled.div`
  font-weight: 600;
  font-style: normal;
  font-family: 'Saira', sans-serif;
  font-size: 20px;
  color: #41414d;
  margin-top: 4px;
`

export const Info = styled.div`
  font-weight: 400;
  font-style: normal;
  font-family: 'Saira', sans-serif;
  font-size: 12px;
  color: #41414d;
  margin-top: 24px;
`

export const DescriptionTitle = styled.div`
  font-weight: 500;
  font-style: normal;
  font-family: 'Saira', sans-serif;
  font-size: 16px;
  color: #737380;
  text-transform: uppercase;
  margin-top: 58px;
`

export const Description = styled.div`
  font-weight: normal;
  font-style: normal;
  font-family: 'Saira', sans-serif;
  font-size: 14px;
  color: #41414d;
  margin-top: 8px;
`

export const Button = styled.button`

  background: #115d8c;
  mix-blend-mode: multiply;
  border-radius: 4px;
  width: 448px;
  height: 44px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-family: 'Saira', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #f5f5fa;
  div:last-child {
    margin-left: 12px;
  }
`
