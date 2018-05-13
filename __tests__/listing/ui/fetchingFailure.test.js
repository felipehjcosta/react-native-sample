import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactTestRenderer from 'react-test-renderer'
import FetchingFailure from '../../../src/listing/ui/fetchingFailure'

Enzyme.configure({adapter: new Adapter()})

describe('FetchingFailure Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<FetchingFailure />)

    const tree = ReactTestRenderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
