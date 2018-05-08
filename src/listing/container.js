import { connect } from 'react-redux'

import Listing from './ui'
import { fetchItems, updateItems, loadMoreItems } from './actions'

const mapStateToProps = (state) => {
  return {
    listingState: state.listing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchItems()),
    updateData: () => dispatch(fetchItems()),
    loadMoreData: (page) => dispatch(loadMoreItems(page))
  }
}

const mergeProps = (state, actions, props) => ({
  ...state,
  ...props,
  ...actions,
  loadMoreData: () => actions.loadMoreData(state.listingState.page)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Listing)
