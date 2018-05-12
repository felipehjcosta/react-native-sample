// @flow
import { apiCall } from './apiCall'
import {
  errorOnFetchItemsAction,
  loadingItemsAction,
  receivedItemsAction
} from './actions'

export const fetchItems = () => (dispatch) => {
  dispatch(loadingItemsAction())
  return apiCall().then((items) => {
    dispatch(receivedItemsAction(items.response.listings))
  }).catch((error) => {
    dispatch(errorOnFetchItemsAction())
  })
}

export function itemsIsLoadingMore () {
  return {
    type: 'ITEMS_IS_LOADING_MORE',
    payload: {isLoadingMore: true, isLoadingMoreFailed: false}
  }
}

export function loadMoreItemsSuccess (newPage, items) {
  return {
    type: 'LOAD_MORE_ITEMS_SUCCESS',
    payload: {
      page: newPage,
      items,
      isLoadingMore: false,
      isLoadingMoreFailed: false
    }
  }
}

export function loadMoreItemsFailure () {
  return {
    type: 'LOAD_MORE_ITEMS_FAILURE',
    payload: {isLoadingMore: false, isLoadingMoreFailed: true}
  }
}

export const loadMoreItems = (page) => (dispatch) => {
  const newPage = page + 1
  dispatch(itemsIsLoadingMore())
  return apiCall(newPage).then((items) => {
    dispatch(loadMoreItemsSuccess(newPage, items.response.listings))
  }).catch((error) => {
    dispatch(loadMoreItemsFailure())
  })
}
