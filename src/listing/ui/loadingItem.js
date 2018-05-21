import { View } from 'react-native'
import React from 'react'
import styles from './styles'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const LoadingItem = () => {
  return (
    <View style={styles.itemContainer}>
      <ShimmerPlaceHolder autoRun style={styles.shimmerPlaceHolder} />
    </View>
  )
}

export default LoadingItem
