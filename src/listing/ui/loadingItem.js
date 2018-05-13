// @flow
import { View } from 'react-native'
import React from 'react'
import styles from './styles'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const LoadingItem = () => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <ShimmerPlaceHolder autoRun style={styles.imageShimmerPlaceHolder} />
        <ShimmerPlaceHolder autoRun style={styles.contentShimmerPlaceHolder} />
      </View>
    </View>
  )
}

export default LoadingItem
