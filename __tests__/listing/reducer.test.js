// @flow
import reducer from '../../src/listing/reducer'
import {
  ERROR_ON_FETCH_ITEMS,
  FETCHING_ITEMS,
  RECEIVED_ITEMS
} from '../../src/listing/actions/types'

describe('Reducer', () => {

  it('should return the initial state', () => {
    const state = {isLoading: false, isLoadingFailed: false, items: [], page: 1}
    const action = {}
    const newState = {
      isLoading: false,
      isLoadingFailed: false,
      items: [],
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle FETCHING_ITEMS', () => {
    const state = {isLoading: false, isLoadingFailed: false, items: [], page: 1}
    const action = {type: FETCHING_ITEMS}
    const newState = {
      isLoading: true,
      isLoadingFailed: false,
      items: [],
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle RECEIVED_ITEMS', () => {
    const state = {isLoading: true, isLoadingFailed: false, items: [], page: 1}
    const action = {
      type: RECEIVED_ITEMS,
      payload: {
        items: [{id: 1}]
      }
    }
    const newState = {
      isLoading: false,
      isLoadingFailed: false,
      items: [{id: 1}],
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle ERROR_ON_FETCH_ITEMS', () => {
    const state = {isLoading: true, isLoadingFailed: false, items: [], page: 1}
    const action = {
      type: ERROR_ON_FETCH_ITEMS
    }
    const newState = {
      isLoading: true,
      isLoadingFailed: true,
      items: [],
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle ITEMS_IS_LOADING_MORE', () => {
    const state = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: false,
      items: [{id: 1}]
    }
    expect(
      reducer(state,
        {
          type: 'ITEMS_IS_LOADING_MORE',
          payload: {isLoadingMore: true, isLoadingMoreFailed: false}
        })).
      toEqual({
        isLoading: false,
        isLoadingFailed: false,
        isLoadingMore: true,
        isLoadingMoreFailed: false,
        items: [{id: 1}]
      })
  })

  it('should handle LOAD_MORE_ITEMS_SUCCESS', () => {
    const state = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: true,
      isLoadingMoreFailed: false,
      items: [{id: 1}]
    }
    expect(reducer(state,
      {
        type: 'LOAD_MORE_ITEMS_SUCCESS',
        payload: {
          items: [{id: 2}],
          isLoadingMore: false,
          isLoadingMoreFailed: false
        }
      })).
      toEqual({
        isLoading: false,
        isLoadingFailed: false,
        isLoadingMore: false,
        isLoadingMoreFailed: false,
        items: [{id: 1}, {id: 2}]
      })
  })

  it('should handle LOAD_MORE_ITEMS_FAILURE', () => {
    const state = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: true,
      isLoadingMoreFailed: false,
      items: [{id: 1}]
    }
    expect(reducer(state,
      {
        type: 'LOAD_MORE_ITEMS_FAILURE',
        payload: {isLoadingMore: false, isLoadingMoreFailed: true}
      })).
      toEqual({
        isLoading: false,
        isLoadingFailed: false,
        isLoadingMore: false,
        isLoadingMoreFailed: true,
        items: [{id: 1}]
      })
  })

})
