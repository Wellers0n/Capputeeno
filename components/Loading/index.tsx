import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import client from '../apollo-client'
import { gql } from '@apollo/client'

const Loading: NextPage = () => {
  return <div style={{ height: '100vh', width: '100%' }}>loading...</div>
}

export default Loading
