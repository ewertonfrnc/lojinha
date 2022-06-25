import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Component
import ProductCard from '../../components/ProductCard/ProductCard.component'

// Context
import { CategoriesContext } from '../../contexts/categories.context'

import './catgory.styles.scss'

const Category = () => {
  const { category } = useParams(),
    { categoriesMap } = useContext(CategoriesContext),
    [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  )
}

export default Category
