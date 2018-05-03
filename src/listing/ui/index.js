// @flow
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import { withNavigation } from 'react-navigation'

export class ListingUI extends React.Component {

  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    detail: PropTypes.func.isRequired,
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
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  rowPressed (item) {
    this.props.detail(item)
    this.props.onItemSelected()
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
