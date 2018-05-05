import { connect } from 'react-redux'

import Listing from './ui'
import { fetchItems, updateItems } from './actions'

const mapStateToProps = (state) => {
  return {
    listingState: state.listing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchItems()),
    updateData: () => dispatch(updateItems())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing)
