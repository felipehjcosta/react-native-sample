import { getSelectedProperty } from '../../src/detail/selectors'

describe('Detail selectors', () => {
  it('should select listing object from state', () => {
    const itemId = '1'
    const state = {
      lister_url: '1'
    }

    const itemsById = {
      '1': {lister_url: '1'},
      '2': {lister_url: '2'}
    }

    const newState = state
    expect(getSelectedProperty(itemId, itemsById)).toEqual(newState)
  })
})
