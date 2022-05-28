import React, { useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
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
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      
      await createUserDocumentFromAuth(user, { displayName })
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
    <div>
      <h1>Cadastrar com email e senha</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Display name</label>
        <input
          type='text'
          name='displayName'
          required
          value={displayName}
          onChange={handleChange}
        />

        <label htmlFor=''>Email</label>
        <input
          type='email'
          name='email'
          required
          value={email}
          onChange={handleChange}
        />

        <label htmlFor=''>Senha</label>
        <input
          type='password'
          name='password'
          required
          value={password}
          onChange={handleChange}
        />

        <label htmlFor=''>Confirmar senha</label>
        <input
          type='password'
          name='confirmPassword'
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type='submit' name=''>
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
