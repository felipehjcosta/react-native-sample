import React from 'react';
import {Image, Text, TouchableHighlight} from 'react-native';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';

import SearchResult from '../SearchResult.js';

configure({adapter: new Adapter()});

describe('<SearchResult>', () => {
    let data;
    let mockNavigateFunction;
    let wrapper;

    beforeEach(() => {
        data = {
            "children": "Rossendale Way",
            "price": "650,000",
            "img_url": "https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
        };

        mockNavigateFunction = jest.fn();

        let navigation = {
            navigate: mockNavigateFunction
        };

        wrapper = shallow(<SearchResult row={data} navigation={navigation}/>);
    });

    it('should be a TouchableHighlight component', () => {
        expect(wrapper.type()).to.equal(TouchableHighlight);
    });

    it('should render the given title', () => {
        expect(wrapper.containsMatchingElement(<Text>{data.title}</Text>)).to.equal(true);
    });

    it('should render the given price', () => {
        expect(wrapper.containsMatchingElement(<Text>{data.price_formatted}</Text>)).to.equal(true);
    });

    it('should render the given image url', () => {
        expect(wrapper.containsMatchingElement(<Image
            source={{uri: data.img_url}}/>))
            .to.equal(true);
    });

    it('should navigate to another component when the user touches the component', () => {

        const componentView = wrapper.find(TouchableHighlight).first();

        componentView.simulate('press');

        expect(mockNavigateFunction.mock.calls.length).to.equals(1);
        expect(mockNavigateFunction.mock.calls[0][0]).to.equals('SearchedPropertyView');
        expect(mockNavigateFunction.mock.calls[0][1]).to.deep.equals({ property: data })
    });
});