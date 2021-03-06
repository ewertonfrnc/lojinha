import React, { useState } from 'react'

// redux
import { useDispatch } from 'react-redux/es/exports'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action'

// Components
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component'
import FormInput from '../FormInput/FormInput.component'

import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => setFormFields(defaultFormFields)

  const handleChange = e => {
    const { name, value } = e.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {
      switch (error.message) {
        case 'auth/wrong-password':
          alert('Senha incorreta para este email.')
          break

        case 'auth/user-not-found':
          alert('Não há usuário associado com este email.')
          break

        default:
          console.log(error)
      }
    }
  }

  const SignInWithGoogle = async () => {
    dispatch(googleSignInStart())
  }

  return (
    <div className="sign-up-container">
      <h2>Já tem uma conta?</h2>
      <span>Acesse com seu email e senha</span>

      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Entrar</Button>

          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={SignInWithGoogle}
          >
            Entrar com Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
