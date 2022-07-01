import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// Firebase
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

// Redux
import { useDispatch } from 'react-redux'
import { setCategoriesMap } from '../../store/categories/categories.action'

// Component
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

import './shop.styles.scss'

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      dispatch(setCategoriesMap(categoryMap))
    }

    getCategoriesMap()
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop
