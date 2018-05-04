// @flow
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import { withNavigation } from 'react-navigation'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

export class ListingUI extends React.Component {

  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    onItemSelected: PropTypes.func.isRequired,
    listingState: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired
  }

  componentDidMount () {
    const {
      fetchData
    } = this.props

    fetchData()
  }

  renderLoading () {
    return (
      <FlatList
        data={new Array(10)}
        keyExtractor={(item, index) => `${index}`}
        renderItem={this.readerShimmerRows.bind(this)} />
    )
  }

  readerShimmerRows (row) {
    return (
      <View>
        <View style={styles.rowContainer}>
          <ShimmerPlaceHolder autoRun style={{width: 80, height: 80, marginRight: 10}} />
          <ShimmerPlaceHolder autoRun style={{flex: 1, height: 80, marginRight: 10}} />
        </View>
        <View style={styles.separator} />
      </View>
    )
  }

  rowPressed (item) {
    this.props.onItemSelected(item.lister_url)
  }

  renderRow (row) {
    return (
      <TouchableHighlight
        onPress={() => this.rowPressed(row.item)}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{uri: row.item.img_url}} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{row.item.price_formatted}</Text>
              <Text style={styles.title} numberOfLines={1}>{row.item.title}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>

      </TouchableHighlight>
    )
  }

  renderList (items) {
    return (
      <FlatList
        data={items}
        keyExtractor={(item) => item.lister_url}
        renderItem={this.renderRow.bind(this)} />
    )
  }

  render () {
    const {
      listingState
    } = this.props

    if (Object.keys(listingState).length === 0) return false

    if (listingState.isLoading) {
      return this.renderLoading()
    } else {
      return this.renderList(listingState.items)
    }
  }
}

const styles = StyleSheet.create({
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
  }
})

export default withNavigation(ListingUI)
