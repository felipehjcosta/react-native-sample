// @flow
import { createListProps } from '../../src/listing/selectors'

describe('Listing selectors', () => {
  it('should select listing object from state', () => {

    const state = {
      isLoading: false,
      isLoadingFailed: true,
      items: []
    }

    const oldState = {
      listing: state
    }

    const newState = state
    expect(createListProps(oldState)).toBe(newState)
  })
})
