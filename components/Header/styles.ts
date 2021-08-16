import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 80px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`

export const Title = styled.h1`
  font-weight: 400;
  font-family: 'Saira Stencil One', cursive;
  color: #5d5d6d;
`

export const WrapperSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div:nth-child(1) {
    margin-right: 24px;
  }
`
