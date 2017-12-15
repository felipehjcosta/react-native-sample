import React, { Component } from 'react';
import { 
  View, 
  TouchableHighlight,
  Text,
  Image
} from 'react-native';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { expect } from 'chai';

import SearchResult from '../SearchResult.js';

describe('<SearchResult>', () => {
  it('should be a TouchableHighlight component', () => {
  const wrapper = shallow(<SearchResult/>);
  
    expect(wrapper.type()).to.equal(TouchableHighlight);
  });

  it('should render the given title', () => {
    const wrapper = shallow(<SearchResult>Rossendale Way</SearchResult>);

    expect(wrapper.containsMatchingElement(<Text>Rossendale Way</Text>)).to.equal(true);
  });

  it('should render the given price', () => {
    const wrapper = shallow(<SearchResult price="650,000"/>);
  
    expect(wrapper.containsMatchingElement(<Text>650,000</Text>)).to.equal(true);
  });
  
  it('should render the given image url', () => {
    const wrapper = shallow(<SearchResult image_url="https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"/>);
  
    expect(wrapper.
           containsMatchingElement(<Image source={{ uri:"https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" }}/>))
      .to.equal(true);
  });
});