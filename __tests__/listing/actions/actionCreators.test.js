// @flow
import fetchMock from 'fetch-mock'
import {
  fetchItems,
  loadMoreItems
} from '../../../src/listing/actions/actionCreators'

import {
  ERROR_ON_FETCH_ITEMS,
  LOADING_ITEMS,
  RECEIVED_ITEMS
} from '../../../src/listing/actions/types'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([thunkMiddleware])

test('check fetch API action with success', () => {
  const initialState = {}
  const store = mockStore(initialState)

  const testData = [{id: 1}]
  fetchMock.get('*', {response: {listings: testData}})

  const actionResult = store.dispatch(fetchItems()).then(() => {
    const actions = store.getActions()
    expect(actions.length).toBe(2)
    expect(actions[0]).toEqual({type: LOADING_ITEMS})
    expect(actions[1]).toEqual({
      type: RECEIVED_ITEMS,
      payload: {items: testData}
    })
  })

  fetchMock.restore()
  return actionResult
})

test('check fetch API action with failure', () => {
  const initialState = {}
  const store = mockStore(initialState)

  fetchMock.get('*', () => {
    throw new Error('Some No Good Error')
  })

  const actionResult = store.dispatch(fetchItems()).then(() => {
    const actions = store.getActions()
    expect(actions.length).toBe(2)
    expect(actions[0]).toEqual({type: LOADING_ITEMS})
    expect(actions[1]).toEqual({type: ERROR_ON_FETCH_ITEMS})
  })

  fetchMock.restore()
  return actionResult
})

test('check load more API action with success', () => {
  const initialState = {}
  const store = mockStore(initialState)

  const page = 1
  const testData = [{id: 1}]
  fetchMock.get('*', {response: {listings: testData}})

  const actionResult = store.dispatch(loadMoreItems(page)).then(() => {
    const actions = store.getActions()
    expect(actions.length).toBe(2)
    expect(actions[0]).toEqual({
      type: 'ITEMS_IS_LOADING_MORE',
      payload: {isLoadingMore: true, isLoadingMoreFailed: false}
    })
    expect(actions[1]).toEqual({
      type: 'LOAD_MORE_ITEMS_SUCCESS',
      payload: {
        page: 2,
        items: testData,
        isLoadingMore: false,
        isLoadingMoreFailed: false
      }
    })
  })

  fetchMock.restore()
  return actionResult
})

test('check load more API action with failure', () => {
  const initialState = {}
  const store = mockStore(initialState)

  const page = 1
  fetchMock.get('*', () => {
    throw new Error('Some No Good Error')
  })

  const actionResult = store.dispatch(loadMoreItems(page)).then(() => {
    const actions = store.getActions()
    expect(actions.length).toBe(2)
    expect(actions[0]).toEqual({
      type: 'ITEMS_IS_LOADING_MORE',
      payload: {isLoadingMore: true, isLoadingMoreFailed: false}
    })
    expect(actions[1]).toEqual({
      type: 'LOAD_MORE_ITEMS_FAILURE',
      payload: {isLoadingMore: false, isLoadingMoreFailed: true}
    })
  })

  fetchMock.restore()
  return actionResult
})
