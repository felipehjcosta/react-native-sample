// @flow
import { apiCall } from './apiCall'

const initialPayload = {isLoading: false, isLoadingFailed: false, items: [], page: 1}

export function itemsIsLoading () {
  return {
    type: 'ITEMS_IS_LOADING',
    payload: Object.assign({}, initialPayload, {isLoading: true})
  }
}

export function itemsFetchDataSuccess (items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    payload: Object.assign({}, initialPayload, {isLoading: false, items})
  }
}

export function itemsFetchDataFailure () {
  return {
    type: 'ITEMS_FETCH_DATA_FAILURE',
    payload: Object.assign({}, initialPayload, {isLoading: false, isLoadingFailed: true})
  }
}

export const fetchItems = () => {
  return function (dispatch) {
    dispatch(itemsIsLoading())
    return apiCall().then((items) => {
      dispatch(itemsFetchDataSuccess(items.response.listings))
    }).catch((error) => {
      dispatch(itemsFetchDataFailure())
    })
  }
}

export function itemsIsLoadingMore () {
  return {
    type: 'ITEMS_IS_LOADING_MORE',
    payload: Object.assign({}, {isLoadingMore: true, isLoadingMoreFailed: false})
  }
}

export function loadMoreItemsSuccess (newPage, items) {
  return {
    type: 'LOAD_MORE_ITEMS_SUCCESS',
    payload: Object.assign({}, {page: newPage, items, isLoadingMore: false, isLoadingMoreFailed: false})
  }
}

export function loadMoreItemsFailure () {
  return {
    type: 'LOAD_MORE_ITEMS_FAILURE',
    payload: Object.assign({}, {isLoadingMore: false, isLoadingMoreFailed: true})
  }
}

export const loadMoreItems = (page) => {
  const newPage = page + 1
  return function (dispatch) {
    dispatch(itemsIsLoadingMore())
    return apiCall(newPage).then((items) => {
      dispatch(loadMoreItemsSuccess(newPage, items.response.listings))
    }).catch((error) => {
      dispatch(loadMoreItemsFailure())
    })
  }
}
