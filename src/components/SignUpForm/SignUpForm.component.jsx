import React, { useState } from 'react'

// Firebase
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

// redux
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../store/user/user.action'

// Components
import Button from '../Button/Button.component'
import FormInput from '../FormInput/FormInput.component'

import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => setFormFields(defaultFormFields)

  const handleChange = e => {
    const { name, value } = e.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('As senhas não são iguais')
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Este email já está sendo usado.')
      } else {
        console.error('Erro ao criar usuário', error.message)
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Ainda não tem conta?</h2>
      <span>Cadastrar com email e senha</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nome Completo"
          type="text"
          name="displayName"
          required
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Senha"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirmar senha"
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">Criar conta</Button>
      </form>
    </div>
  )
}

export default SignUpForm
