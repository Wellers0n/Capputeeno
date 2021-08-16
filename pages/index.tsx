import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import Header from '../components/Header'
import Products from '../components/Products'

const Home: NextPage = props => {
  return (
    <div>
      <Header />
      <Products />
    </div>
  )
}

export default Home
