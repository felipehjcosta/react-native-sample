import React from 'react'
import { ScrollView, Text } from 'react-native'
import { CachedImage } from 'react-native-cached-image'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'

import DetailUI from '../../src/detail/ui'

configure({adapter: new Adapter()})

describe('<DetailUI>', () => {
  beforeEach(() => {
    data = {
      'bathroom_number': 2,
      'bedroom_number': 2,
      'car_spaces': 0,
      'commission': 0,
      'construction_year': 0,
      'datasource_name': 'Findproperly',
      'img_height': 300,
      'img_url': 'https://imgs.nestimg.com/2_bedroom_flat_for_sale_in_worship_street_shoreditch_ec2a_london_108322789796073114.jpg',
      'img_width': 400,
      'keywords': 'En suite, Penthouse, Balcony, Gym, Hot tub, Sauna, Kitchen, Lift, Porter, Swimming Pool, Parking, Reception',
      'latitude': 51.5212,
      'lister_url': 'https://www.nestoria.co.uk/detail/0000000108322789796073114/title/5/1-1?serpUid=&pt=1&ot=1&l=london&did=114_default&utm_source=api&utm_medium=external',
      'listing_type': 'buy',
      'location_accuracy': 9,
      'longitude': -0.082792,
      'price': 3015000,
      'price_currency': '£',
      'price_formatted': '£3,015,000',
      'price_high': 3015000,
      'price_low': 3015000,
      'property_type': 'flat',
      'room_number': 2,
      'size': 0,
      'size_type': 'net',
      'summary': 'The 45th penthouse apartment comes with open plan lounge, dining an...',
      'thumb_height': 60,
      'thumb_url': 'https://imgs.nestimg.com/medium/2_bedroom_flat_for_sale_in_worship_street_shoreditch_ec2a_london_108322789796073114.jpg',
      'thumb_width': 80,
      'title': 'Worship Street, Shoreditch, London EC2A',
      'updated_in_days': 1,
      'updated_in_days_formatted': 'first seen yesterday',
    }

    const props = {
      detailState: data
    }

    const navigation = {navigate: jest.fn()}

    wrapper = shallow(<DetailUI {...props} navigation={navigation} />)
  })

  it('should be a ScrollView component', () => {
    expect(wrapper.type()).to.equal(ScrollView)
  })

  it('should render the correct price', () => {
    let formatted_price = data.price_formatted.split(' ')[0]
    expect(wrapper.containsMatchingElement(<Text>{formatted_price}</Text>)).
      to.
      equal(true)
  })

  it('should render the image', () => {
    expect(
      wrapper.containsMatchingElement(<CachedImage source={{uri: data.img_url}}/>)).
      to.
      equal(true)
  })

  it('should render the title', () => {
    expect(wrapper.containsMatchingElement(<Text>{data.title}</Text>)).
      to.
      equal(true)
  })

  it('should render the stats', () => {
    let stats = data.bedroom_number + ' bed ' + data.property_type
    if (data.bathroom_number) {
      stats += ', ' + data.bathroom_number + ' ' + (data.bathroom_number > 1
        ? 'bathrooms' : 'bathroom')
    }

    expect(wrapper.containsMatchingElement(<Text>{stats}</Text>)).
      to.
      equal(true)
  })

  it('should render the summary', () => {
    expect(wrapper.containsMatchingElement(<Text>{data.summary}</Text>)).
      to.
      equal(true)
  })

})
