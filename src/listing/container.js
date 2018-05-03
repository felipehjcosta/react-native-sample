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
    fetchData: () => dispatch(itemsFetchData()),
    detail: (item) => dispatch({
      type: 'DETAIL_PROPERTY',
      payload: item
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing)
