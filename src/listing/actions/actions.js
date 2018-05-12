import { ERROR_ON_FETCH_ITEMS, LOADING_ITEMS, RECEIVED_ITEMS } from './types'

export const loadingItemsAction = () => {
  return {
    type: LOADING_ITEMS
  }
}

export const receivedItemsAction = (items) => {
  return {
    type: RECEIVED_ITEMS,
    payload: {items}
  }
}

export const errorOnFetchItemsAction = () => {
  return {
    type: ERROR_ON_FETCH_ITEMS
  }
}
