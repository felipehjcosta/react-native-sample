import React, { Component } from 'react';
import { View } from 'react-native';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { expect } from 'chai';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import PropertyFinder from '../PropertyFinder';

describe('<PropertyFinder>', () => {
  it('should be a view component', () => {
    const wrapper = shallow(<PropertyFinder></PropertyFinder>)
    
    expect(wrapper.type()).to.equal(View)
  });
});
