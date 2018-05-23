import {
  ERROR_ON_FETCHING_ITEMS,
  ERROR_ON_FETCHING_MORE_ITEMS,
  FETCHING_ITEMS,
  FETCHING_MORE_ITEMS,
  RECEIVED_ITEMS,
  RECEIVED_MORE_ITEMS
} from './actions/types'

const fetching = (payload) => state => Object.assign(
  {},
  state,
  initialState,
  {isLoading: true}
)

const receivedItems = (payload) => state => Object.assign(
  {},
  state,
  {
    isLoading: false,
    itemsById: payload.items.reduce((accumulator, target) => ({...accumulator, [target.lister_url]: target}), {})
  }
)

const errorOnFetchingItems = (payload) => state => Object.assign(
  {},
  state,
  {isLoading: false, isLoadingFailed: true}
)

const fetchingMore = (payload) => state => Object.assign(
  {},
  state,
  {isLoadingMore: true, isLoadingMoreFailed: false}
)

const receivedMoreItems = (payload) => state => Object.assign(
  {},
  state,
  {
    isLoadingMore: false,
    page: payload.newPage,
    itemsById: payload.items.reduce((accumulator, target) => ({
      ...accumulator,
      [target.lister_url]: target
    }), state.itemsById)
  }
)

const errorOnFetchingMoreItems = (payload) => state => Object.assign(
  {},
  state,
  {isLoadingMore: false, isLoadingMoreFailed: true}
)

const initialState = {
  isLoading: false,
  isLoadingFailed: false,
  isLoadingMore: false,
  isLoadingMoreFailed: false,
  itemsById: {},
  page: 1
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_ITEMS:
      return fetching(action.payload)(state)
    case RECEIVED_ITEMS:
      return receivedItems(action.payload)(state)
    case ERROR_ON_FETCHING_ITEMS:
      return errorOnFetchingItems(action.payload)(state)
    case FETCHING_MORE_ITEMS:
      return fetchingMore(action.payload)(state)
    case RECEIVED_MORE_ITEMS:
      return receivedMoreItems(action.payload)(state)
    case ERROR_ON_FETCHING_MORE_ITEMS:
      return errorOnFetchingMoreItems(action.payload)(state)
    default:
      return state
  }
}
