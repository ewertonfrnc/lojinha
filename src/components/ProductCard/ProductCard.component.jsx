import React from 'react'
import Button from '../Button/Button.component'

import './product-card.styles.scss'

const ProductCard = ({ product: { name, price, imageUrl } }) => {
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />

      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Adicionar ao carrinho</Button>
    </div>
  )
}

export default ProductCard
