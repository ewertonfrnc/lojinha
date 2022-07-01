import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils'

import { setCurrentUser } from './store/user/user.action'

// COMPONENTS
import Navigation from './routes/Navigation/Navigation.component'
import Home from './routes/Home/Home.component'
import Shop from './routes/Shop/Shop.component'
import Authentication from './routes/Authentication/Authentication.component'
import Checkout from './routes/checkout/checkout.component'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) createUserDocumentFromAuth(user)
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
