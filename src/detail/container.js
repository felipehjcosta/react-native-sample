import { connect } from 'react-redux'

import Detail from './ui'

const mapStateToProps = (state) => {
  return {
    detailState: state.detail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
