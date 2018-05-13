import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactTestRenderer from 'react-test-renderer'
import ListItem from '../../../src/listing/ui/listItem'

Enzyme.configure({adapter: new Adapter()})

describe('LoadingItem Component', () => {
  it('renders correctly', () => {
    const item = {
      img_url: 'https://imgs.nestimg.com/casa_300_m2_108811252799247473.jpg',
      price_formatted: 'R$ 750.000',
      title: 'Campo Grande,Rio de Janeiro,Rio De Janeiro',
      lister_url: 'https://www.nestoria.com.br/detail/0000000108550797542396092/title/5/1-1?serpUid=&pt=1&ot=1&l=rio-de-janeiro&did=41_default&utm_source=api&utm_medium=external'
    }
    const wrapper = shallow(<ListItem item={item} />)

    const tree = ReactTestRenderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
