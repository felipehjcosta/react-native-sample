import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactTestRenderer from 'react-test-renderer'
import FetchingFailure from '../../../src/listing/ui/fetchingFailure'
import { TouchableHighlight } from 'react-native'

Enzyme.configure({adapter: new Adapter()})

describe('FetchingFailure Component', () => {
  it('should renders correctly', () => {
    const wrapper = shallow(<FetchingFailure />)

    const tree = ReactTestRenderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call retry prop function when user touches retry', () => {
    const onRetryButtonTouched = jest.fn()

    const wrapper = shallow(<FetchingFailure
      onRetryButtonTouched={onRetryButtonTouched} />)
    const uiRendered = ReactTestRenderer.create(wrapper)
    const componentView = uiRendered.root.findByType(TouchableHighlight)

    componentView.props.onPress()

    expect(onRetryButtonTouched.mock.calls.length).toBe(1)
  })
})
