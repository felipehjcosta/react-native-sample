import { connect } from 'react-redux'
import { getSelectedProperty } from './selectors'

import Detail from './ui'

const mapStateToProps = (state, props) => ({
  detailState: getSelectedProperty(props.navigation.state.params.itemId, state.listing.items)
})

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
