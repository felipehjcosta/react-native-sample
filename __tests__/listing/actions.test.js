// @flow
import fetchMock from 'fetch-mock'
import { fetchItems, updateItems, loadMoreItems } from '../../src/listing/actions'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([thunkMiddleware])

test('check fetch API action', () => {
  const initialState = {}
  const store = mockStore(initialState)

  const testData = {id: 1}
  fetchMock.get('*', {response: {listings: testData}})

  const actionResult = store.dispatch(fetchItems()).then(() => {
    const actions = store.getActions()
    expect(actions.length).toBe(3)
    expect(actions[0]).
      toEqual({type: 'ITEMS_IS_LOADING', payload: {isLoading: true, items: [], page: 1}})
    expect(actions[1]).
      toEqual(
        {type: 'ITEMS_IS_LOADING', payload: {isLoading: false, items: [], page: 1}})
    expect(actions[2]).
      toEqual({
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        payload: {isLoading: false, items: testData, page: 1}
      })
  })

  fetchMock.restore()
  return actionResult
})

test('check update API action', () => {
  const initialState = {}
  const store = mockStore(initialState)

  const testData = {id: 1}
  fetchMock.get('*', {response: {listings: testData}})

  const actionResult = store.dispatch(updateItems()).then(() => {
    const actions = store.getActions()
    expect(actions.length).toBe(3)
    expect(actions[0]).
      toEqual({type: 'ITEMS_IS_REFRESHING', payload: {isRefreshing: true}})
    expect(actions[1]).
      toEqual(
        {type: 'ITEMS_IS_REFRESHING', payload: {isRefreshing: false}})
    expect(actions[2]).
      toEqual({
        type: 'UPDATE_ITEMS_SUCCESS',
        payload: {items: testData}
      })
  })

  fetchMock.restore()
  return actionResult
})

test('check load more API action', () => {
  const initialState = {}
  const store = mockStore(initialState)

  const page = 1
  const testData = {id: 1}
  fetchMock.get('*', {response: {listings: testData}})

  const actionResult = store.dispatch(loadMoreItems(page)).then(() => {
    const actions = store.getActions()
    expect(actions.length).toBe(3)
    expect(actions[0]).
      toEqual({type: 'ITEMS_IS_LOADING_MORE', payload: {isLoadingMore: true}})
    expect(actions[1]).
      toEqual(
        {type: 'ITEMS_IS_LOADING_MORE', payload: {isLoadingMore: false}})
    expect(actions[2]).
      toEqual({
        type: 'LOAD_MORE_ITEMS_SUCCESS',
        payload: {page: 2, items: testData}
      })
  })

  fetchMock.restore()
  return actionResult
})
