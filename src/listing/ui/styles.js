import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'

const IMAGE_HEIGHT = Dimensions.get('screen').height * 0.30
const SCREEN_WIDTH = Dimensions.get('screen').width
const IMAGE_SHIMMER_WIDTH = SCREEN_WIDTH - 32
const IMAGE_SHIMMER_HEIGHT = IMAGE_HEIGHT + 48

export default StyleSheet.create({
  itemImage: {
    height: IMAGE_HEIGHT,
    marginLeft: 8,
    marginTop: 8,
    marginRight: 8
  },
  contentContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  listing: {
    backgroundColor: '#ffffff'
  },
  contentPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  contentTitle: {
    fontSize: 20,
    color: '#656565'
  },
  shimmerPlaceHolder: {
    width: IMAGE_SHIMMER_WIDTH,
    height: IMAGE_SHIMMER_HEIGHT,
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  },
  loadingMoreIndicatorContainer: {
    paddingVertical: 16
  }
})
