import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/test/test.utils'
import CartIcon from '../CartIcon.component'

describe('Cart Icon tests', () => {
  test('Uses preloaded state to render', () => {
    const initialCartItems = [
      { id: 1, name: 'Item A', imgUrl: 'test', price: 10, quantity: 1 },
      { id: 2, name: 'Item B', imgUrl: 'test', price: 10, quantity: 2 },
    ]

    renderWithProviders(<CartIcon />, {
      preloadedState: { cart: { cartItems: initialCartItems } },
    })

    const cartItemElement = screen.getByText('3')
    expect(cartItemElement).toBeInTheDocument()
  })
})
