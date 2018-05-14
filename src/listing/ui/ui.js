import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import LoadingItem from './loadingItem'
import ListItem from './listItem'
import styles from './styles'
import FetchingFailure from './fetchingFailure'

class ListingUI extends React.Component {

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
    style={styles.listing}
    data={flatListViewModel.items}
    keyExtractor={(item, index) => `${index}`}
    renderItem={(row) => flatListViewModel.renderItem(row)}
    refreshing={false}
    onRefresh={() => flatListViewModel.onRefresh()}
    onEndReached={() => flatListViewModel.loadMore()}
    onEndReachedThreshold={0.5}
    ListFooterComponent={() => flatListViewModel.renderFooter()}
    ListEmptyComponent={() => flatListViewModel.renderEmpty()}
    ItemSeparatorComponent={this.renderSeparator} />

  renderSeparator = () => <View style={styles.separator} />

  createFlatListViewModel = (listingState) => {
    if (listingState.isLoading) {
      return this.createLoadingFlatListViewModel()
    } else if (listingState.isLoadingFailed) {
      return this.createLoadingFailedFlatListViewModel()
    } else if (listingState.isLoadingMore) {
      return this.createLoadingMoreFlatListViewModel(listingState.items)
    } else if (listingState.isLoadingMoreFailed) {
      return this.createLoadingMoreFailedFlatListViewModel(listingState.items)
    } else {
      return this.createItemsFlatListViewModel(listingState.items)
    }
  }

  createLoadingFlatListViewModel = () => {
    return {
      items: new Array(10),
      renderItem: (row) => <LoadingItem />,
      onRefresh: () => {},
      loadMore: () => {},
      renderFooter: () => false,
      renderEmpty: () => false
    }
  }

  createLoadingFailedFlatListViewModel = () => {
    return {
      items: [],
      renderItem: (row) => <LoadingItem />,
      onRefresh: () => {},
      loadMore: () => {},
      renderFooter: () => false,
      renderEmpty: () => <FetchingFailure
        onRetryButtonTouched={() => this.props.fetchData()} />
    }
  }

  createLoadingMoreFlatListViewModel = (items) => {
    return {
      items,
      renderItem: (row) => this.renderRow(row),
      onRefresh: () => {},
      loadMore: () => {},
      renderFooter: () => this.renderLoadingMoreFooter(),
      renderEmpty: () => false
    }
  }

  renderLoadingMoreFooter = () => {
    return (
      <View style={styles.loadingMoreIndicatorContainer}>
        <ActivityIndicator animating size='large' />
      </View>
    )
  }

  createLoadingMoreFailedFlatListViewModel = (items) => {
    return {
      items,
      renderItem: (row) => this.renderRow(row),
      onRefresh: () => {},
      loadMore: () => {},
      renderFooter: () => this.renderLoadingMoreFailedFooter(),
      renderEmpty: () => false
    }
  }

  renderLoadingMoreFailedFooter = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Error on fetch data</Text>
        <Text>Veify your internet connection and try gain</Text>
        <TouchableHighlight
          underlayColor='#dddddd'
          style={{padding: 10, backgroundColor: '#48BBEC'}}>
          <Text>Retry</Text>
        </TouchableHighlight>
      </View>
    )
  }

  createItemsFlatListViewModel = (items) => {
    return {
      items,
      renderItem: (row) => this.renderRow(row),
      onRefresh: () => this.props.updateData(),
      loadMore: () => this.props.loadMoreData(),
      renderFooter: () => false,
      renderEmpty: () => false
    }
  }

  renderRow = (row) => {
    return (
      <TouchableHighlight
        onPress={() => this.rowPressed(row.item)}
        underlayColor='#dddddd'>
        <ListItem item={row.item} />
      </TouchableHighlight>
    )
  }

  rowPressed = (item) => this.props.onItemSelected(item.lister_url)
}

export default ListingUI
