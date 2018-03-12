// @flow
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import ListingComponent from './components/ListingComponent'

const store = configureStore()

export default class Index extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ListingComponent />
      </Provider>
    )
  }
}
