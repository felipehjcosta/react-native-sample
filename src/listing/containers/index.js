import { connect } from 'react-redux'

import Listing from '../ui/'
import { itemsFetchData } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    items: state.items,
    isLoading: state.itemsIsLoading
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
