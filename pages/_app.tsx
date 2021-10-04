import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import { CartProvider } from '../context/cart-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </CartProvider>
  )
}
export default MyApp
