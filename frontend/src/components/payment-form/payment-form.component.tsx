import { useState, FormEvent } from 'react'

import { useSelector } from 'react-redux'
import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { BUTTON_TYPE_CLASSES } from '../Button/Button.component'

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from './payment-form.styles'

const PaymentForm = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const stripe = useStripe(),
    elements = useElements()

  const amount = useSelector(selectCartTotal),
    currentUser = useSelector(selectCurrentUser)

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then(res => res.json())

    const {
      paymentIntent: { client_secret },
    } = response

    const cardDetails = elements.getElement(CardElement)

    if (cardDetails === null) return

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded')
        alert('Payment Succesful!')
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit card payment: </h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm
