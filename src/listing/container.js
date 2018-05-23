import { connect } from 'react-redux'
import Listing from './ui/ui'
import { fetchItems, loadMoreItems } from './actions/actionCreators'
import { createListProps } from './selectors'

const mapStateToProps = (state) => ({
  listingState: createListProps(state.listing)
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
