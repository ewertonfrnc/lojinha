import { queryByText, screen } from '@testing-library/react'

import { renderWithProviders } from '../../../utils/test/test.utils'
import Navigation from '../Navigation.component'

describe('Navigation tests', () => {
  test('It should render a sign in and not a sign out link if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    })

    const signInLinkElement = screen.getByText(/sign in/i)
    expect(signInLinkElement).toBeInTheDocument()

    const signOutLinkElement = screen.queryByText(/sign out/i)
    expect(signOutLinkElement).toBeNull()
  })

  test('it should render Sign out and not Sign in if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    })

    const signInLinkElement = screen.queryByText(/sign in/i)
    expect(signInLinkElement).toBeNull()

    const signOutLinkElement = screen.getByText(/sign out/i)
    expect(signOutLinkElement).toBeInTheDocument()
  })

  test('it should not render a cart dropdown if IsCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    })

    const dropdownTextElement = screen.queryByText(/Your cart is empty!/i)
    expect(dropdownTextElement).toBeNull()
  })

  test('it should render a cart dropdown if IsCartOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    })

    const dropdownTextElement = screen.queryByText(/Your cart is empty!/i)
    expect(dropdownTextElement).toBeInTheDocument()
  })
})
