// @flow
import { apiCall } from './apiCall'

const initialPayload = {isLoading: false, items: [], page: 1}

export function itemsIsLoading (bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    payload: Object.assign({}, initialPayload, {isLoading: bool})
  }
}

export function itemsFetchDataSuccess (items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    payload: Object.assign({}, initialPayload, {items})
  }
}

export const fetchItems = () => {
  return function (dispatch) {
    dispatch(itemsIsLoading(true))
    return apiCall().then((items) => {
      dispatch(itemsIsLoading(false))
      return items
    }).then((items) => {
      dispatch(itemsFetchDataSuccess(items.response.listings))
    })
  }
}

export function itemsIsRefreshing (bool) {
  return {
    type: 'ITEMS_IS_REFRESHING',
    payload: Object.assign({}, {isRefreshing: bool})
  }
}

export function updateItemsSuccess (items) {
  return {
    type: 'UPDATE_ITEMS_SUCCESS',
    payload: Object.assign({}, {items})
  }
}

export const updateItems = () => {
  return function (dispatch) {
    dispatch(itemsIsRefreshing(true))
    return apiCall().then((items) => {
      dispatch(itemsIsRefreshing(false))
      return items
    }).then((items) => {
      dispatch(updateItemsSuccess(items.response.listings))
    })
  }
}

export function itemsIsLoadingMore (bool) {
  return {
    type: 'ITEMS_IS_LOADING_MORE',
    payload: Object.assign({}, {isLoadingMore: bool})
  }
}

export function loadMoreItemsSuccess (newPage, items) {
  return {
    type: 'LOAD_MORE_ITEMS_SUCCESS',
    payload: Object.assign({}, {page: newPage, items})
  }
}

export const loadMoreItems = (page) => {
  const newPage = page + 1
  return function (dispatch) {
    dispatch(itemsIsLoadingMore(true))
    return apiCall(newPage).then((items) => {
      dispatch(itemsIsLoadingMore(false))
      return items
    }).then((items) => {
      dispatch(loadMoreItemsSuccess(newPage, items.response.listings))
    })
  }
}
