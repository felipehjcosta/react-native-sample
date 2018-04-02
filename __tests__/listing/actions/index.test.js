// @flow
import fetchMock from 'fetch-mock'
import { itemsFetchData } from '../../../src/listing/actions/index'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([thunkMiddleware])

test('check API action', () => {
  const initialState = {}
  const store = mockStore(initialState)

  const testData = {id: 1}
  fetchMock.get('*', {response: {listings: testData}})

  const actionResult = store.dispatch(itemsFetchData()).then(() => {
    const actions = store.getActions()
    expect(actions.length).toBe(3)
    expect(actions[0]).
      toEqual({type: 'ITEMS_IS_LOADING', payload: {isLoading: true, items: []}})
    expect(actions[1]).
      toEqual(
        {type: 'ITEMS_IS_LOADING', payload: {isLoading: false, items: []}})
    expect(actions[2]).
      toEqual({
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        payload: {isLoading: false, items: testData}
      })
  })

  fetchMock.restore()
  return actionResult
})
