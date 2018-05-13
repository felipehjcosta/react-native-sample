import {
  ERROR_ON_FETCH_ITEMS,
  FETCHING_ITEMS,
  RECEIVED_ITEMS
} from './actions/types'

const fetching = (payload) => state => Object.assign(
  {},
  state,
  {isLoading: true}
)

const receivedItems = (payload) => state => Object.assign(
  {},
  state,
  {isLoading: false, items: payload.items}
)

const errorOnFetchItems = (payload) => state => Object.assign(
  {},
  state,
  {isLoadingFailed: true}
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

const initialState = {
  isLoading: false,
  isLoadingFailed: false,
  items: [],
  page: 1
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_ITEMS:
      return fetching(action.payload)(state)
    case RECEIVED_ITEMS:
      return receivedItems(action.payload)(state)
    case ERROR_ON_FETCH_ITEMS:
      return errorOnFetchItems(action.payload)(state)
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
