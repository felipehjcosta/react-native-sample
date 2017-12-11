import React, { Component } from 'react';
import { 
  View, Text
} from 'react-native';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { expect } from 'chai';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import SearchPage from '../SearchPage';

describe('<SearchPage>', () => {
  beforeEach(() => {
    wrapper = shallow(<SearchPage></SearchPage>)
  });
  
  it('should be a View component', () => {
    expect(wrapper.type()).to.equal(View)
  });
  
  it('should have a call to action', () => {
    expect(wrapper.contains(<Text>Search for houses to buy!</Text>)).to.equal(true)
  });
});
