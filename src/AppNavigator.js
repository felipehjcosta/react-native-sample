import React from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Listing from './listing/index'
import Detail from './detail/index'

const ListingScreen = ({navigation}) =>
  <Listing navigation={navigation}
    onItemSelected={(itemId) => navigation.navigate('Detail',
      {itemId: itemId})} />

const DetailScreen = ({navigation}) => <Detail navigation={navigation} />

export const AppNavigator = StackNavigator({
  Listing: {
    screen: ListingScreen,
    navigationOptions: ({navigation}) => ({
      title: 'PropertyFinder'
    })
  },
  Detail: {screen: DetailScreen}
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
