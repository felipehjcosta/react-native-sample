import React, { Component } from 'react';
import { 
  ListView 
} from 'react-native';
import PropTypes from 'prop-types'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { expect } from 'chai';

import SearchResultList from '../SearchResultList.js';

describe('<SearchResultList>', () => {
   beforeEach(() => {
     data = [
       { title: "Rossendale Way", price: "650,000"},
       { title: "Rosemary Place", price: "750,000"}
     ];
     
    wrapper = shallow(<SearchResultList data={data}/>);
  });
  
  it('should define its propTypes', () => {
    expect(SearchResultList.propTypes.data).to.be.an('function');
  });
  
  it('shoule be a ListView component', () => {
    expect(wrapper.type()).to.equal(ListView);
  });
  
  it('should have correct datasource in state', () => {
    expect(wrapper.state('dataSource')._dataBlob['s1']).to.equal(data);
  });
});