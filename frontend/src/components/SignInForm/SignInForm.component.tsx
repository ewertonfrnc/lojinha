import { useState, FormEvent, ChangeEvent } from 'react'

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {
      console.log('user sign in failed', error)
    }
  }

  const SignInWithGoogle = async () => {
    dispatch(googleSignInStart())
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Log in with email and password</span>

      <form onSubmit={e => handleSubmit(e)}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>

          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={SignInWithGoogle}
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
