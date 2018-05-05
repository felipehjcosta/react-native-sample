// @flow
import { FlatList, Image, Text, TouchableHighlight, View } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import { withNavigation } from 'react-navigation'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import styles from './styles.js'

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

  render () {
    const {
      listingState
    } = this.props

    if (Object.keys(listingState).length === 0) return false

    return this.renderList(this.createFlatListViewModel(listingState))
  }

  renderList = (flatListViewModel) => <FlatList
    data={flatListViewModel.items}
    keyExtractor={(item, index) => flatListViewModel.keyExtractor(item, index)}
    renderItem={(row) => flatListViewModel.renderItem(row)}
    refreshing={flatListViewModel.refreshing}
    onRefresh={() => flatListViewModel.onRefresh()}
    onEndReached={() => flatListViewModel.loadMore()}
    onEndReachedThreshold={5}
    ItemSeparatorComponent={this.renderSeparator} />

  renderSeparator = () => <View style={styles.separator} />

  createFlatListViewModel = (listingState) => {
    if (listingState.isLoading) {
      return this.createLoadingFlatListViewModel()
    } else if (listingState.isRefreshing) {
      return this.createRefreshingFlatListViewModel(listingState.items)
    } else if (listingState.isLoadingMore) {
      return this.createLoadingMoreFlatListViewModel(listingState.items)
    } else {
      return this.createItemsFlatListViewModel(listingState.items)
    }
  }

  createLoadingFlatListViewModel = () => {
    return {
      items: new Array(10),
      keyExtractor: (item, index) => `${index}`,
      renderItem: (row) => {
        return (
          <View>
            <View style={styles.rowContainer}>
              <ShimmerPlaceHolder autoRun style={styles.imageShimmerPlaceHolder} />
              <ShimmerPlaceHolder autoRun style={styles.contentShimmerPlaceHolder} />
            </View>
          </View>
        )
      },
      refreshing: false,
      onRefresh: () => {},
      loadMore: () => {}
    }
  }

  createRefreshingFlatListViewModel = (items) => {
    return {
      items,
      keyExtractor: (item, index) => `${index}`,
      renderItem: (row) => this.renderRow(row),
      refreshing: true,
      onRefresh: () => {},
      loadMore: () => {}
    }
  }

  createLoadingMoreFlatListViewModel = (items) => {
    return {
      items,
      keyExtractor: (item, index) => `${index}`,
      renderItem: (row) => this.renderRow(row),
      refreshing: true,
      onRefresh: () => {},
      loadMore: () => {}
    }
  }

  createItemsFlatListViewModel = (items) => {
    return {
      items,
      keyExtractor: (item, index) => `${index}`,
      renderItem: (row) => this.renderRow(row),
      refreshing: false,
      onRefresh: () => this.props.updateData(),
      loadMore: () => this.props.loadMoreData()
    }
  }

  renderRow = (row) => {
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
        </View>

      </TouchableHighlight>
    )
  }

  rowPressed = (item) => this.props.onItemSelected(item.lister_url)
}

export default withNavigation(ListingUI)
