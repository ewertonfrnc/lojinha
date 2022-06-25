import React, { useContext } from 'react'

// ROUTE
import { Outlet, Link } from 'react-router-dom'

// Context
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

// Firebase
import { signOutUser } from '../../utils/firebase/firebase.utils'

// COMPONENTS
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../../components/CartIcon/CartIcon.component'
import CartDropdown from '../../components/CartDropdown/CartDropdown.component'

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.styles'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink className="nav-link" to="/shop">
            LOJA
          </NavLink>

          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutUser}>
              SAIR
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              ENTRAR
            </NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  )
}

export default Navigation
