import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AppReducer from './src/AppReducer'
import AppWithNavigationState from './src/AppNavigator'

export default class App extends React.Component {
  store = createStore(AppReducer, applyMiddleware(thunk))

  render () {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
