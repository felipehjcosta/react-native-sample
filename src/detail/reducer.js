// @flow
export default function reducer (state = {}, action) {
  switch (action.type) {
    case 'DETAIL_PROPERTY':
      return Object.assign(
        {},
        state,
        action.payload
      )
    default:
      return state
  }
}
