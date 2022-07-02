import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { rootReducer } from './root-reducer'

const persistConfig = { key: 'root', storage, whitelist: ['cart'] },
  persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean)
const composeEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composeEnhancers)

export const persistor = persistStore(store)
