import { apiCall } from './apiCall'
import {
  errorOnFetchingItemsAction, errorOnFetchingMoreItems,
  loadingItemsAction, loadingMoreItemsAction,
  receivedItemsAction, receivedMoreItemsAction
} from './actions'

export const fetchItems = () => (dispatch) => {
  dispatch(loadingItemsAction())
  return apiCall().then((response) => {
    dispatch(receivedItemsAction(response.response.listings))
  }).catch((error) => {
    dispatch(errorOnFetchingItemsAction())
  })
}

export const loadMoreItems = (page) => (dispatch) => {
  const newPage = page + 1
  dispatch(loadingMoreItemsAction())
  return apiCall(newPage).then((response) => {
    dispatch(receivedMoreItemsAction(newPage, response.response.listings))
  }).catch((error) => {
    dispatch(errorOnFetchingMoreItems())
  })
}
