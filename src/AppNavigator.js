import React from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Listing from './listing/index'
import Detail from './detail/ui'

export const AppNavigator = StackNavigator({
  Listing: { screen: Listing },
  Detail: { screen: Detail }
})

class AppWithNavigationState extends React.Component {
  render () {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation
      })} />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation
})

export default connect(mapStateToProps)(AppWithNavigationState)
