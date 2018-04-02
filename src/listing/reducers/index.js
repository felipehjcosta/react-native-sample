// @flow
export default function reducer (state = {}, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return Object.assign(
        {},
        action.payload,
        state
      )
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return Object.assign(
        {},
        state,
        action.payload
      )

    default:
      return state
  }
}
