import { useNavigate } from 'react-router-dom'

//COMPONENTS
import Button from '../Button/Button.component'
import CartItem from '../cart-item/cart-item.component'

// Redux
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles'

const CartDropdown = () => {
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)

  const goToCheckoutHandler = () => navigate('/checkout')

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty!</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
