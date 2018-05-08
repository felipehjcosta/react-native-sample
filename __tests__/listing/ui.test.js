// @flow
import React from 'react'
import { TouchableHighlight } from 'react-native'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactTestRenderer from 'react-test-renderer'
import { ListingUI } from '../../src/listing/ui'

Enzyme.configure({adapter: new Adapter()})

describe('Listing Component', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.mock('react-native-shimmer-placeholder', () => 'View')
  })

  it('should display list correctly', () => {
    const props = {
      fetchData: jest.fn(),
      listingState: {
        isLoading: false,
        items: [
          {
            img_url: 'https://imgs.nestimg.com/casa_300_m2_108811252799247473.jpg',
            price_formatted: 'R$ 750.000',
            title: 'Campo Grande,Rio de Janeiro,Rio De Janeiro',
            lister_url: 'https://www.nestoria.com.br/detail/0000000108550797542396092/title/5/1-1?serpUid=&pt=1&ot=1&l=rio-de-janeiro&did=41_default&utm_source=api&utm_medium=external'
          }
        ]
      }
    }

    const navigation = {navigate: jest.fn()}

    const onItemSelected = jest.fn()

    const wrapper = shallow(<ListingUI {...props} navigation={navigation} onItemSelected={onItemSelected} />)

    const tree = ReactTestRenderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should display loading correctly', () => {
    const props = {
      fetchData: jest.fn(),
      listingState: {
        isLoading: true
      }
    }

    const navigation = {navigate: jest.fn()}

    const onItemSelected = jest.fn()

    const wrapper = shallow(<ListingUI {...props} navigation={navigation} onItemSelected={onItemSelected} />)

    const tree = ReactTestRenderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should display loading failure correctly', () => {
    const props = {
      fetchData: jest.fn(),
      listingState: {
        isLoading: false,
        isLoadingFailed: true,
        items: []
      }
    }

    const navigation = {navigate: jest.fn()}

    const onItemSelected = jest.fn()

    const wrapper = shallow(<ListingUI {...props} navigation={navigation} onItemSelected={onItemSelected} />)

    const tree = ReactTestRenderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call the mock fetch data function ', () => {
    const props = {
      fetchData: jest.fn(),
      listingState: {
        items: []
      }
    }

    const navigation = {navigate: jest.fn()}

    const onItemSelected = jest.fn()

    shallow(<ListingUI {...props} navigation={navigation} onItemSelected={onItemSelected} />)

    expect(props.fetchData.mock.calls.length).toBe(1)
  })

  it('should notify item selected function when touch item', () => {
    const props = {
      fetchData: jest.fn(),
      detail: jest.fn(),
      listingState: {
        isLoading: false,
        items: [
          {
            img_url: 'https://imgs.nestimg.com/casa_300_m2_108811252799247473.jpg',
            price_formatted: 'R$ 750.000',
            title: 'Campo Grande,Rio de Janeiro,Rio De Janeiro',
            lister_url: 'https://www.nestoria.com.br/detail/0000000108550797542396092/title/5/1-1?serpUid=&pt=1&ot=1&l=rio-de-janeiro&did=41_default&utm_source=api&utm_medium=external'
          }
        ]
      }
    }

    const navigation = {navigate: jest.fn()}

    const onItemSelected = jest.fn()

    const wrapper = shallow(<ListingUI {...props} navigation={navigation} onItemSelected={onItemSelected} />)

    const uiRendered = ReactTestRenderer.create(wrapper)
    const componentView = uiRendered.root.findByType(TouchableHighlight)

    componentView.props.onPress()

    expect(onItemSelected.mock.calls.length).toBe(1)
    expect(onItemSelected.mock.calls[0][0]).
      toBe(
        'https://www.nestoria.com.br/detail/0000000108550797542396092/title/5/1-1?serpUid=&pt=1&ot=1&l=rio-de-janeiro&did=41_default&utm_source=api&utm_medium=external')
  })

  it('should notify function when touch item', () => {
    const props = {
      fetchData: jest.fn(),
      detail: jest.fn(),
      listingState: {
        isLoading: false,
        isLoadingFailed: true,
      }
    }

    const navigation = {navigate: jest.fn()}

    const onItemSelected = jest.fn()

    const wrapper = shallow(<ListingUI {...props} navigation={navigation} onItemSelected={onItemSelected} />)

    const uiRendered = ReactTestRenderer.create(wrapper)
    const componentView = uiRendered.root.findByType(TouchableHighlight)

    componentView.props.onPress()

    expect(props.fetchData.mock.calls.length).toBe(2)
  })

  it('should display loading more correctly', () => {
    const props = {
      fetchData: jest.fn(),
      listingState: {
        isLoadingMore: true,
        items: [
          {
            img_url: 'https://imgs.nestimg.com/casa_300_m2_108811252799247473.jpg',
            price_formatted: 'R$ 750.000',
            title: 'Campo Grande,Rio de Janeiro,Rio De Janeiro',
            lister_url: 'https://www.nestoria.com.br/detail/0000000108550797542396092/title/5/1-1?serpUid=&pt=1&ot=1&l=rio-de-janeiro&did=41_default&utm_source=api&utm_medium=external'
          }
        ]
      }
    }

    const navigation = {navigate: jest.fn()}

    const onItemSelected = jest.fn()

    const wrapper = shallow(<ListingUI {...props} navigation={navigation} onItemSelected={onItemSelected} />)

    const tree = ReactTestRenderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should display loading more failure correctly', () => {
    const props = {
      fetchData: jest.fn(),
      listingState: {
        isLoadingMore: false,
        isLoadingMoreFailed: true,
        items: [
          {
            img_url: 'https://imgs.nestimg.com/casa_300_m2_108811252799247473.jpg',
            price_formatted: 'R$ 750.000',
            title: 'Campo Grande,Rio de Janeiro,Rio De Janeiro',
            lister_url: 'https://www.nestoria.com.br/detail/0000000108550797542396092/title/5/1-1?serpUid=&pt=1&ot=1&l=rio-de-janeiro&did=41_default&utm_source=api&utm_medium=external'
          }
        ]
      }
    }

    const navigation = {navigate: jest.fn()}

    const onItemSelected = jest.fn()

    const wrapper = shallow(<ListingUI {...props} navigation={navigation} onItemSelected={onItemSelected} />)

    const tree = ReactTestRenderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
