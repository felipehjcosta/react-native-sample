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


import App from '../App';
import SearchPage from '../SearchPage';

describe('<App>', () => {
  beforeEach(() => {
    wrapper = shallow(<App></App>)
  });
  
  it('should be a SearchPage component', () => {
    expect(wrapper.type()).to.equal(SearchPage)
  });
});
