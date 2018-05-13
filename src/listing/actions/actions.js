import {
  ERROR_ON_FETCHING_ITEMS,
  ERROR_ON_FETCHING_MORE_ITEMS,
  FETCHING_ITEMS,
  FETCHING_MORE_ITEMS,
  RECEIVED_ITEMS,
  RECEIVED_MORE_ITEMS
} from './types'

export const loadingItemsAction = () => {
  return {
    type: FETCHING_ITEMS
  }
}

export const receivedItemsAction = (items) => {
  return {
    type: RECEIVED_ITEMS,
    payload: {items}
  }
}

export const errorOnFetchingItemsAction = () => {
  return {
    type: ERROR_ON_FETCHING_ITEMS
  }
}

export const loadingMoreItemsAction = () => {
  return {
    type: FETCHING_MORE_ITEMS
  }
}

export const receivedMoreItemsAction = (newPage, items) => {
  return {
    type: RECEIVED_MORE_ITEMS,
    payload: {newPage: newPage, items}
  }
}

export const errorOnFetchingMoreItems = () => {
  return {
    type: ERROR_ON_FETCHING_MORE_ITEMS
  }
}
