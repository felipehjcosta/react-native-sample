// @flow
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/index'

import Listing from './containers'

const store = configureStore()

export default class Index extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Listing />
      </Provider>
    )
  }
}
