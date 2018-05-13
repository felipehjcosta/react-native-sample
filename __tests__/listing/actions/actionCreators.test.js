import moxios from 'moxios'
import {
  fetchItems,
  loadMoreItems
} from '../../../src/listing/actions/actionCreators'

import {
  ERROR_ON_FETCHING_ITEMS,
  ERROR_ON_FETCHING_MORE_ITEMS,
  FETCHING_ITEMS,
  FETCHING_MORE_ITEMS,
  RECEIVED_ITEMS,
  RECEIVED_MORE_ITEMS
} from '../../../src/listing/actions/types'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([thunkMiddleware])

describe('Actions', () => {
  let store
  beforeEach(() => {
    const initialState = {}
    store = mockStore(initialState)
    moxios.install()
  })
  afterEach(() => moxios.uninstall())

  test('check fetch API action with success', () => {
    const testData = [{id: 1}]
    moxios.stubRequest(/api\.nestoria\.com\.br\/api.*/, {
      status: 200,
      response: {response: {listings: testData}}
    })

    return store.dispatch(fetchItems()).then(() => {
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions[0]).toEqual({type: FETCHING_ITEMS})
      expect(actions[1]).toEqual({
        type: RECEIVED_ITEMS,
        payload: {items: testData}
      })
    })
  })

  test('check fetch API action with failure', () => {
    moxios.stubRequest(/api\.nestoria\.com\.br\/api.*/, {
      status: 404
    })

    return store.dispatch(fetchItems()).then(() => {
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions[0]).toEqual({type: FETCHING_ITEMS})
      expect(actions[1]).toEqual({type: ERROR_ON_FETCHING_ITEMS})
    })
  })

  test('check load more API action with success', () => {
    const page = 1
    const testData = [{id: 1}]
    moxios.stubRequest(/api\.nestoria\.com\.br\/api.*/, {
      status: 200,
      response: {response: {listings: testData}}
    })

    return store.dispatch(loadMoreItems(page)).then(() => {
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions[0]).toEqual({type: FETCHING_MORE_ITEMS})
      expect(actions[1]).toEqual({
        type: RECEIVED_MORE_ITEMS,
        payload: {newPage: 2, items: testData}
      })
    })
  })

  test('check load more API action with failure', () => {
    const page = 1
    moxios.stubRequest(/api\.nestoria\.com\.br\/api.*/, {
      status: 404
    })

    return store.dispatch(loadMoreItems(page)).then(() => {
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions[0]).toEqual({type: FETCHING_MORE_ITEMS})
      expect(actions[1]).toEqual({type: ERROR_ON_FETCHING_MORE_ITEMS})
    })
  })

})
