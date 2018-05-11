import { connect } from 'react-redux'
import Listing from './ui'
import { fetchItems, loadMoreItems } from './actions'
import { createListingState } from './selectors'

const mapStateToProps = (state) => ({
  listingState: createListingState(state)
})

const actionCreators = {
  fetchData: fetchItems,
  updateData: fetchItems,
  loadMoreData: loadMoreItems
}

const mergeProps = (state, actions, props) => ({
  ...state,
  ...props,
  ...actions,
  loadMoreData: () => actions.loadMoreData(state.listingState.page)
})

export default connect(
  mapStateToProps,
  actionCreators,
  mergeProps
)(Listing)
