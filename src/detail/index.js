import React from 'react'
import { SafeAreaView } from 'react-native'
import DetailContainer from './container'

const Detail = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DetailContainer {...props} />
    </SafeAreaView>
  )
}
export default Detail
