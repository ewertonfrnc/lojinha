import { screen, fireEvent } from '@testing-library/react'
import * as reactRedux from 'react-redux'

import { renderWithProviders } from '../../../utils/test/test.utils'
import Navigation from '../Navigation.component'
import { signOutStart } from '../../../store/user/user.action'

const mockedDispatch = jest.fn()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedDispatch,
}))

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

  test('it should dispatch signOutStart action when clicking on the Sign out link', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: { user: { currentUser: {} } },
    })

    const signOutLinkElement = screen.getByText(/sign out/i)
    fireEvent.click(signOutLinkElement)

    expect(mockedDispatch).toHaveBeenCalled()
    expect(mockedDispatch).toHaveBeenCalledWith(signOutStart())

    mockedDispatch.mockClear()
  })
})
