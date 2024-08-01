import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/test/test.utils'
import ProductCard from '../ProductCard.component'

describe('ProductCard tests', () => {
  test('it should add the product item  when Product card button is clicked', () => {
    const mockProduct = { id: 1, imgUrl: 'test', name: 'Item A', price: 10 }

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      },
    )

    const addToCartButtonElement = screen.getByText(/add to cart/i)
    fireEvent.click(addToCartButtonElement)

    expect(store.getState().cart.cartItems.length).toBe(1)
  })
})
