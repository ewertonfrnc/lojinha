import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

//COMPONENTS
import Button from '../Button/Button.component'
import CartItem from '../cart-item/cart-item.component'

// CONTEXTS
import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext)

  const goToCheckoutHandler = () => navigate('/checkout')

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Finalizar Compra</Button>
    </div>
  )
}

export default CartDropdown
