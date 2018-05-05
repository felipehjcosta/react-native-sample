import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  imageShimmerPlaceHolder: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  contentShimmerPlaceHolder: {
    flex: 1,
    height: 80,
    marginRight: 10
  },
  loadingMoreIndicatorContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE'
  }
})
