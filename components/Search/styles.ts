import styled from 'styled-components'
import { Search } from '@styled-icons/bootstrap/Search'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`

export const Input = styled.input`
  width: 300px;
  height: 42px;
  background: #f3f5f6;
  border-radius: 8px 0 0 8px;
  color: #737380;
  padding-left: 16px;
  border: none;
  border-radius: none;
  outline: none;
`
export const SearchIcon = styled(Search)`
  height: 42px;
  padding-right: 13px;
  padding-left: 5px;
  background: #f3f5f6;
  color: #737380;
  border-radius: 0 8px 8px 0;
`

export const WrapperSearch = styled.div`
  display: flex;
`
