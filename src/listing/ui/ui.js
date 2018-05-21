import {
  ActivityIndicator,
  FlatList,
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

  componentDidMount = () => this.props.fetchData()

  render = () => this.renderList(
    this.createFlatListViewModel(this.props.listingState))

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
    ListEmptyComponent={() => flatListViewModel.renderEmpty()} />

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
      renderFooter: () => null,
      renderEmpty: () => null
    }
  }

  createLoadingFailedFlatListViewModel = () => {
    return {
      items: [],
      renderItem: (row) => <LoadingItem />,
      onRefresh: () => {},
      loadMore: () => {},
      renderFooter: () => null,
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
      renderEmpty: () => null
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
      renderFooter: () => <FetchingFailure
        onRetryButtonTouched={() => this.props.loadMoreData()} />,
      renderEmpty: () => null
    }
  }

  createItemsFlatListViewModel = (items) => {
    return {
      items,
      renderItem: (row) => this.renderRow(row),
      onRefresh: () => this.props.updateData(),
      loadMore: () => this.props.loadMoreData(),
      renderFooter: () => null,
      renderEmpty: () => null
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
