import React, { useContext } from 'react'

// COMPONENTS
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

import './product-card.styles.scss'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  const formatCurrency = value =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{formatCurrency(price)}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard
