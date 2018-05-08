// @flow

const loading = (payload) => state => Object.assign(
  {},
  state,
  payload
)

const fetchDataSuccess = (payload) => state => Object.assign(
  {},
  state,
  payload
)

const fetchDataFailure = (payload) => state => Object.assign(
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

const updateItemsFailure = (payload) => state => Object.assign(
  {},
  state,
  payload
)

const loadingMore = (payload) => state => Object.assign(
  {},
  state,
  payload
)

const loadMoreItemsSuccess = (payload) => state => Object.assign(
  {},
  state,
  payload,
  {items: [...state.items, ...payload.items]}
)

const loadMoreItemsFailure = (payload) => state => Object.assign(
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
    case 'ITEMS_FETCH_DATA_FAILURE':
      return fetchDataFailure(action.payload)(state)
    case 'ITEMS_IS_REFRESHING':
      return refreshing(action.payload)(state)
    case 'ITEMS_IS_LOADING_MORE':
      return loadingMore(action.payload)(state)
    case 'LOAD_MORE_ITEMS_SUCCESS':
      return loadMoreItemsSuccess(action.payload)(state)
    case 'LOAD_MORE_ITEMS_FAILURE':
      return loadMoreItemsFailure(action.payload)(state)
    default:
      return state
  }
}
