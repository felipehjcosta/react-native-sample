import { createListProps } from '../../src/listing/selectors'

describe('Listing selectors', () => {
  it('should select listing object from state', () => {

    const state = {
      isLoading: false,
      isLoadingFailed: true,
      items: [
        {lister_url: '1'},
        {lister_url: '2'}
      ]
    }

    const listingState = {
      isLoading: false,
      isLoadingFailed: true,
      itemsById: {
        '1': {lister_url: '1'},
        '2': {lister_url: '2'}
      }
    }

    const newState = state
    expect(createListProps(listingState)).toEqual(newState)
  })
})
