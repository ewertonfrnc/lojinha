import React, { useContext } from 'react'

// CONTEXT
import { ProductsContext } from '../../contexts/products.context'

// COMPONENTS
import ProductCard from '../../components/ProductCard/ProductCard.component'

import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext)

  return (
    <div className='products-container'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop
