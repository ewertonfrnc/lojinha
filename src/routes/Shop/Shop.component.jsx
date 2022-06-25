import React, { Fragment, useContext } from 'react'

// CONTEXT
import { CategoriesContext } from '../../contexts/categories.context'

// COMPONENTS
import ProductCard from '../../components/ProductCard/ProductCard.component'

import './shop.styles.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  console.log(categoriesMap)

  return (
    <>
      {Object.keys(categoriesMap).map(title => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  )
}

export default Shop
