import { connect } from 'react-redux'

import Detail from './ui'

const mapStateToProps = (state, props) => {
  return {
    detailState: state.listing.items.find(
      item => item.lister_url === props.navigation.state.params.itemId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
