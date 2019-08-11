import React from 'react'
import { SafeAreaView } from 'react-native'
import ListingContainer from './container'

const Listing = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ListingContainer {...props} />
    </SafeAreaView>
  )
}
export default Listing
