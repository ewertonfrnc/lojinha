import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === productToAdd.id
    )

    if (existingCartItem)
      return cartItems.map(cartItem =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )

    return [...cartItems, { ...productToAdd, quantity: 1 }]
  },
  removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1)
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)

    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  },
  clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false),
    [cartItems, setCartItems] = useState([]),
    [cartCount, setCartCount] = useState(0),
    [cartTotal, setCartTotal] = useState(0)

  const addItemToCart = productToAdd =>
      setCartItems(addCartItem(cartItems, productToAdd)),
    removeItemFromCart = cartItemToRemove =>
      setCartItems(removeCartItem(cartItems, cartItemToRemove)),
    clearItemFromCart = cartItemToClear =>
      setCartItems(clearCartItem(cartItems, cartItemToClear))

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
