// @flow
import React from 'react'
import { TouchableHighlight } from 'react-native'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactTestRenderer from 'react-test-renderer'
import { ListingUI } from '../../../src/listing/ui/index'

Enzyme.configure({adapter: new Adapter()})

describe('Listing Component', () => {
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
          }
        ]
      }
    }

    const navigation = {navigate: jest.fn()}

    const wrapper = shallow(<ListingUI {...props} navigation={navigation} />)

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

    const wrapper = shallow(<ListingUI {...props} navigation={navigation} />)

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

    shallow(<ListingUI {...props} navigation={navigation} />)

    expect(props.fetchData.mock.calls.length).toBe(1)
  })

  it('should call the mock detail data function when touch item', () => {
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
          }
        ]
      }
    }

    const navigation = {navigate: jest.fn()}

    const wrapper = shallow(<ListingUI {...props} navigation={navigation} />)

    const uiRendered = ReactTestRenderer.create(wrapper)
    const componentView = uiRendered.root.findByType(TouchableHighlight)

    componentView.props.onPress()

    expect(props.detail.mock.calls.length).toBe(1)
  })
})
