import React, { useContext } from 'react'
import './navigation.styles.scss'

// ROUTE
import { Outlet, Link } from 'react-router-dom'

// Context
import { UserContext } from '../../contexts/user.context'

// Firebase
import { signOutUser } from '../../utils/firebase/firebase.utils'

// LOGO COMPONENT FROM CREATE-REACT-APP
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log(currentUser)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <>
      <nav className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            LOJA
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SAIR
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              ENTRAR
            </Link>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Navigation
