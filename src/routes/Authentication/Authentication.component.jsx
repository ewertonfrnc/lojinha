import React from 'react'

// Components
import SignInForm from '../../components/SignInForm/SignInForm.component'
import SignUpForm from '../../components/SignUpForm/SignUpForm.component'

import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
