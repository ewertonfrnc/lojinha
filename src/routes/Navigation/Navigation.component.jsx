import React from 'react'
import './navigation.styles.scss'

// ROUTE
import { Outlet, Link } from 'react-router-dom'

// LOGO COMPONENT FROM CREATE-REACT-APP
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Navigation = () => {
  return (
    <>
      <nav className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Navigation
