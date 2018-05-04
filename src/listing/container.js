import { connect } from 'react-redux'

import Listing from './ui'
import { itemsFetchData } from './actions'

const mapStateToProps = (state) => {
  return {
    listingState: state.listing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(itemsFetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing)
