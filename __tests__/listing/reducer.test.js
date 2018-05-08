// @flow
import reducer from '../../src/listing/reducer'

test('reducer should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({})
})

test('reducer should handle ITEMS_IS_LOADING', () => {
  expect(
    reducer(undefined,
      {type: 'ITEMS_IS_LOADING', payload: {isLoading: true, isLoadingFailed: false, items: [], page: 1}})).
    toEqual({isLoading: true, isLoadingFailed: false, items: [], page: 1})
})

test('reducer should handle ITEMS_FETCH_DATA_SUCCESS', () => {
  expect(reducer(undefined,
    {type: 'ITEMS_FETCH_DATA_SUCCESS', payload: {items: [{id: 1}], isLoading: false, isLoadingFailed: false, page: 1}})).
    toEqual({items: [{id: 1}], isLoading: false, isLoadingFailed: false, page: 1})
})

test('reducer should handle ITEMS_FETCH_DATA_FAILURE', () => {
  expect(reducer(undefined,
    {type: 'ITEMS_FETCH_DATA_FAILURE', payload: {isLoadingFailed: true, isLoading: false, items: [], page: 1}})).
    toEqual({isLoadingFailed: true, isLoading: false, items: [], page: 1})
})

test('reducer should handle ITEMS_IS_LOADING_MORE', () => {
  const state = {
    isLoading: false,
    isLoadingFailed: false,
    isLoadingMore: false,
    items: [{id: 1}]
  }
  expect(
    reducer(state,
      {type: 'ITEMS_IS_LOADING_MORE', payload: {isLoadingMore: true, isLoadingMoreFailed: false}})).
    toEqual({
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: true,
      isLoadingMoreFailed: false,
      items: [{id: 1}]
    })
})

test('reducer should handle LOAD_MORE_ITEMS_SUCCESS', () => {
  const state = {
    isLoading: false,
    isLoadingFailed: false,
    isLoadingMore: true,
    isLoadingMoreFailed: false,
    items: [{id: 1}]
  }
  expect(reducer(state,
    {type: 'LOAD_MORE_ITEMS_SUCCESS', payload: {items: [{id: 2}], isLoadingMore: false, isLoadingMoreFailed: false}})).
    toEqual({
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      items: [{id: 1}, {id: 2}]
    })
})

test('reducer should handle LOAD_MORE_ITEMS_FAILURE', () => {
  const state = {
    isLoading: false,
    isLoadingFailed: false,
    isLoadingMore: true,
    isLoadingMoreFailed: false,
    items: [{id: 1}]
  }
  expect(reducer(state,
    {type: 'LOAD_MORE_ITEMS_FAILURE', payload: {isLoadingMore: false, isLoadingMoreFailed: true}})).
    toEqual({
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: true,
      items: [{id: 1}]
    })
})
