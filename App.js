import { Root } from "native-base";
import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";

import SearchScreen from './SearchScreen';
import SearchResultList from './SearchResultList.js';
import SearchedPropertyView from './SearchedPropertyView.js';

const AppNavigator = StackNavigator({
    SearchScreen: {
        screen: SearchScreen,
        navigationOptions: {
            title: 'FindProperty'
        }
    },
    SearchResultList: { screen: SearchResultList },
    SearchedPropertyView: { screen: SearchedPropertyView },
});

export default class App extends React.Component {
    render() {
        return (
            <Root>
                <AppNavigator />
            </Root>
        )
    }
}