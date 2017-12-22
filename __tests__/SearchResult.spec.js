import React from 'react';
import {Image, Text, TouchableHighlight} from 'react-native';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';

import SearchResult from '../SearchResult.js';

configure({adapter: new Adapter()});

describe('<SearchResult>', () => {
    beforeEach(() => {
        data = {
            "children": "Rossendale Way",
            "price": "650,000",
            "img_url": "https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
        };

        wrapper = shallow(<SearchResult row={data}/>);
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
});