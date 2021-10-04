import * as React from 'react'
import { getProduct } from '../helpers'

type Action = {
  type: 'increment' | 'decrement'
  payload: any
}

type Dispatch = (action: Action) => void

type State = { count: number }

type CountProviderProps = { children: React.ReactNode }

const CartContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment': {
      const data = action?.payload?.data

      const { products, total } = getProduct()

      const productIndex = products.findIndex(
        element => element.id === data?.Product?.id
      )

      localStorage.setItem(
        'products',
        JSON.stringify([
          {
            ...data.Product,
            count: productIndex ? 1 : products[productIndex][`count`] + 1
          }
        ])
      )

      return { count: total }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
function CartProvider({ children }: CountProviderProps) {
  const { total } = getProduct()
  const [state, dispatch] = React.useReducer(countReducer, {
    count: total
  })

  const value = { state, dispatch }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart() {
  const context = React.useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}
export { CartProvider, useCart }
