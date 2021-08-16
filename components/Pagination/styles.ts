import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
`

export const Box = styled.a<{ active: boolean }>`
  height: 32px;
  width: 32px;
  margin-left: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${({ active }) => (active ? '#FFA585' : '#737380')};
  background: ${({ active }) => (active ? '#F5F5FA' : '#E9E9F0')};
  border: ${({ active }) =>
    active ? '1px solid #FFA585' : '1px solid #737380'};
  font-weight: bold;
`
