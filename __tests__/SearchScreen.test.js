import React, { Component } from 'react';
import { 
  View, 
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { expect } from 'chai';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import SearchScreen from '../SearchScreen';

describe('<SearchScreen>', () => {
  beforeEach(() => {
    wrapper = shallow(<SearchScreen></SearchScreen>)
  });
  
  it('should be a View component', () => {
    expect(wrapper.type()).to.equal(View)
  });
  
  it('should have a call to action', () => {
    expect(wrapper.containsMatchingElement(<Text>Search for houses to buy!</Text>)).to.equal(true)
  });
  
  it('should have a description message', () => {
    expect(wrapper
           .containsMatchingElement(<Text>Search by place-name, postcode or search near your location.</Text>))
      .to
      .equal(true)
  });
  
  it('should have input with text', () => {
    expect(wrapper.containsMatchingElement(<TextInput value="london"/>)).to.equal(true);
  });
  
  it('should have a submit button', () => {
    expect(wrapper.find(TouchableHighlight).containsMatchingElement(<Text>Go</Text>)).to.equal(true);
  });
  
});
