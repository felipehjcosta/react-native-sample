// @flow
import { apiCall } from './apiCall'

export function itemsIsLoading (bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  }
}

export function itemsFetchDataSuccess (items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}

export const itemsFetchData = () => {
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
