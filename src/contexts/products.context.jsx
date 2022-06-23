import { createContext, useState, useEffect } from 'react'
import { addCollectionAndDocument } from '../utils/firebase/firebase.utils'

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]),
    value = { products }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
