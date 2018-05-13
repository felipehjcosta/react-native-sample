import { Text, View, TouchableHighlight } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const FetchingFailure = ({onRetryButtonTouched}) => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Error on fetch data</Text>
      <Text>Verify your internet connection and try gain</Text>
      <TouchableHighlight
        onPress={() => onRetryButtonTouched()}
        underlayColor='#dddddd'
        style={{padding: 10, backgroundColor: '#48BBEC'}}>
        <Text>Retry</Text>
      </TouchableHighlight>
    </View>
  )
}

FetchingFailure.propTypes = {
  onRetryButtonTouched: PropTypes.func.isRequired
}

export default FetchingFailure
