import { getSelectedProperty } from '../../src/detail/selectors'

describe('Detail selectors', () => {
  it('should select listing object from state', () => {
    const itemListerUrl = 'https://www.nestoria.com.br/detail/0000000109299681877361422/title/5/1-1?serpUid=&pt=1&ot=1&l=rio-de-janeiro&did=2_high1&utm_source=api&utm_medium=external'
    const state = {
      'lister_url': 'https://www.nestoria.com.br/detail/0000000109299681877361422/title/5/1-1?serpUid=&pt=1&ot=1&l=rio-de-janeiro&did=2_high1&utm_source=api&utm_medium=external'
    }

    const oldState = {
      listing: {
        items: [
          {
            'lister_url': 'https://www.nestoria.com.br/detail/0000000109299681877361422/title/5/1-1?serpUid=&pt=1&ot=1&l=rio-de-janeiro&did=2_high1&utm_source=api&utm_medium=external'
          }
        ]
      }
    }

    const newState = state
    expect(getSelectedProperty(itemListerUrl, oldState.listing.items)).toEqual(newState)
  })
})
