// @flow
// import { applyMiddleware, createStore } from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from '../reducers'
//
// export default function configureStore (initialState) {
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(thunk),
//   )
// }

import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { items, itemsIsLoading } from '../reducers'

const reducer = combineReducers({
  items,
  itemsIsLoading
})

const middleware = applyMiddleware(thunk)

export default function configureStore (initialValue = {}) {
  let store

  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable */
    // Development mode with Redux DevTools support enabled.
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Prevents Redux DevTools from re-dispatching all previous actions.
        shouldHotReload: false,
      })
      : compose
    // Create the redux store.
    store = createStore(reducer, initialValue, composeEnhancers(middleware))
    /* eslint-enable */
  } else {
    // Production mode.
    store = createStore(reducer, initialValue, middleware)
  }

  return store
}
