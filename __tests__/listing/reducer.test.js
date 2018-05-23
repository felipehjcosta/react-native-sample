import reducer from '../../src/listing/reducer'
import {
  ERROR_ON_FETCHING_ITEMS,
  ERROR_ON_FETCHING_MORE_ITEMS,
  FETCHING_ITEMS,
  FETCHING_MORE_ITEMS,
  RECEIVED_ITEMS,
  RECEIVED_MORE_ITEMS
} from '../../src/listing/actions/types'

describe('Reducer', () => {
  it('should return the initial state', () => {
    const action = {}
    const newState = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {},
      page: 1
    }
    expect(reducer(undefined, action)).toEqual(newState)
  })

  it('should handle FETCHING_ITEMS', () => {
    const state = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {},
      page: 1
    }
    const action = {type: FETCHING_ITEMS}
    const newState = {
      isLoading: true,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {},
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle FETCHING_ITEMS with error state', () => {
    const state = {
      isLoading: false,
      isLoadingFailed: true,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {},
      page: 1
    }
    const action = {type: FETCHING_ITEMS}
    const newState = {
      isLoading: true,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {},
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle RECEIVED_ITEMS', () => {
    const state = {
      isLoading: true,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {},
      page: 1
    }
    const action = {
      type: RECEIVED_ITEMS,
      payload: {
        items: [{
          lister_url: '1'
        }]
      }
    }
    const newState = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {
        '1': {lister_url: '1'}
      },
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle ERROR_ON_FETCHING_ITEMS', () => {
    const state = {
      isLoading: true,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {},
      page: 1
    }
    const action = {
      type: ERROR_ON_FETCHING_ITEMS
    }
    const newState = {
      isLoading: false,
      isLoadingFailed: true,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {},
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle FETCHING_ITEMS with items', () => {
    const state = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {
        '1': {lister_url: '1'}
      },
      page: 1
    }
    const action = {type: FETCHING_ITEMS}
    const newState = {
      isLoading: true,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {},
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle FETCHING_MORE_ITEMS', () => {
    const state = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {
        '1': {lister_url: '1'}
      },
      page: 1
    }
    const action = {type: FETCHING_MORE_ITEMS}
    const newState = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: true,
      isLoadingMoreFailed: false,
      itemsById: {
        '1': {lister_url: '1'}
      },
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle FETCHING_MORE_ITEMS with error state', () => {
    const state = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: true,
      itemsById: {
        '1': {lister_url: '1'}
      },
      page: 1
    }
    const action = {type: FETCHING_MORE_ITEMS}
    const newState = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: true,
      isLoadingMoreFailed: false,
      itemsById: {
        '1': {lister_url: '1'}
      },
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle RECEIVED_MORE_ITEMS', () => {
    const state = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: true,
      isLoadingMoreFailed: false,
      itemsById: {
        '1': {lister_url: '1'}
      },
      page: 1
    }
    const action = {
      type: RECEIVED_MORE_ITEMS,
      payload: {
        newPage: 2,
        items: [{lister_url: '2'}]
      }
    }
    const newState = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: false,
      itemsById: {
        '1': {lister_url: '1'},
        '2': {lister_url: '2'}
      },
      page: 2
    }
    expect(reducer(state, action)).toEqual(newState)
  })

  it('should handle ERROR_ON_FETCHING_MORE_ITEMS', () => {
    const state = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: true,
      isLoadingMoreFailed: false,
      itemsById: {
        '1': {lister_url: '1'}
      },
      page: 1
    }
    const action = {
      type: ERROR_ON_FETCHING_MORE_ITEMS
    }
    const newState = {
      isLoading: false,
      isLoadingFailed: false,
      isLoadingMore: false,
      isLoadingMoreFailed: true,
      itemsById: {
        '1': {lister_url: '1'}
      },
      page: 1
    }
    expect(reducer(state, action)).toEqual(newState)
  })
})
