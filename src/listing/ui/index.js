// @flow
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import PropTypes from 'prop-types'

import React from 'react'

export class Listing extends React.Component {

  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    listingState: PropTypes.object.isRequired
  }

  componentDidMount () {
    const {
      fetchData
    } = this.props

    fetchData()
  }

  renderRow (row) {
    return (
      <TouchableHighlight
        onPress={() => this.rowPressed()}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{uri: row.img_url}} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{row.price_formatted}</Text>
              <Text style={styles.title} numberOfLines={1}>{row.title}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>

      </TouchableHighlight>
    )
  }

  render () {
    const {
      listingState
    } = this.props

    if (Object.keys(listingState).length === 0) return false

    const dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.lister_url !== r2.lister_url})
    return (
      <ListView
        dataSource={dataSource.cloneWithRows(listingState.items)}
        renderRow={this.renderRow.bind(this)} />
    )
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

export default Listing
