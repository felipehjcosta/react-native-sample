import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LoadingItem from '../../../src/listing/ui/loadingItem'
import ReactTestRenderer from 'react-test-renderer'

Enzyme.configure({adapter: new Adapter()})

describe('LoadingItem Component', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.mock('react-native-shimmer-placeholder', () => 'View')
  })

  it('renders correctly', () => {
    const wrapper = shallow(<LoadingItem />)

    const tree = ReactTestRenderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
