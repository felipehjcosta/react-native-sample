// @flow
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { Listing } from '../../../src/listing/ui/index'

Enzyme.configure({adapter: new Adapter()})

describe('Listing Component', () => {
  it('should render render correctly', () => {
    const props = {
      fetchData: jest.fn(),
      items: [
        {
          img_url: 'https://imgs.nestimg.com/casa_300_m2_108811252799247473.jpg',
          price_formatted: 'R$ 750.000',
          title: 'Campo Grande,Rio de Janeiro,Rio De Janeiro'
        }
      ]
    }

    const wrapper = shallow(<Listing {...props} />)

    const tree = renderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call the mock fetch data function ', () => {
    const props = {
      fetchData: jest.fn(),
      items: []
    }

    shallow(<Listing {...props} />)

    expect(props.fetchData.mock.calls.length).toBe(1)
  })
})
