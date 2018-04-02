import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import listing from '../listing/reducers'

const reducer = combineReducers({
  listing
})

const middleware = applyMiddleware(thunk)

export function createAppStore (initialValue = {}) {
  let store

  if (process.env.NODE_ENV === 'development') {
    // Development mode with Redux DevTools support enabled.
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Prevents Redux DevTools from re-dispatching all previous actions.
        shouldHotReload: false,
      })
      : compose
    // Create the redux store.
    store = createStore(reducer, initialValue, composeEnhancers(middleware))
  } else {
    // Production mode.
    store = createStore(reducer, initialValue, middleware)
  }

  return store
}
