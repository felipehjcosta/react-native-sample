import React from 'react'
import Listing from './src/listing/index'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createAppStore } from './src/store/'

const store = createAppStore()

const AppNavigator = StackNavigator({
  Listing: {
    screen: Listing
  }
})

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
