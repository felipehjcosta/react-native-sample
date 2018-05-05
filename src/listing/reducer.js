// @flow

const loading = (payload) => state => Object.assign(
  {},
  payload,
  state
)

const fetchDataSuccess = (payload) => state => Object.assign(
  {},
  state,
  payload
)

const refreshing = (payload) => state => Object.assign(
  {},
  state,
  payload
)

const updateItemsSuccess = (payload) => state => Object.assign(
  {},
  state,
  payload
)

export default function reducer (state = {}, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return loading(action.payload)(state)
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return fetchDataSuccess(action.payload)(state)
    case 'ITEMS_IS_REFRESHING':
      return refreshing(action.payload)(state)
    case 'UPDATE_ITEMS_SUCCESS':
      return updateItemsSuccess(action.payload)(state)
    default:
      return state
  }
}
