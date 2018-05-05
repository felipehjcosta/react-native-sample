// @flow
import reducer from '../../src/listing/reducer'

test('reducer should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({})
})

test('reducer should handle ITEMS_IS_LOADING', () => {
  expect(
    reducer(undefined,
      {type: 'ITEMS_IS_LOADING', payload: {isLoading: true}})).
    toEqual({isLoading: true})
})

test('reducer should handle ITEMS_FETCH_DATA_SUCCESS', () => {
  expect(reducer(undefined,
    {type: 'ITEMS_FETCH_DATA_SUCCESS', payload: {items: {id: 1}}})).
    toEqual({items: {id: 1}})
})

test('reducer should handle ITEMS_IS_REFRESHING', () => {
  expect(
    reducer(undefined,
      {type: 'ITEMS_IS_REFRESHING', payload: {isRefreshing: true}})).
    toEqual({isRefreshing: true})
})

test('reducer should handle UPDATE_ITEMS_SUCCESS', () => {
  expect(reducer(undefined,
    {type: 'UPDATE_ITEMS_SUCCESS', payload: {items: {id: 1}}})).
    toEqual({items: {id: 1}})
})