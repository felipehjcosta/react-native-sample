import {Root} from "native-base";
import React from 'react';
import Listing from './src/listing/index';

// const AppNavigator = StackNavigator({
//     SearchScreen: {
//         screen: SearchScreen,
//         navigationOptions: {
//             title: 'FindProperty'
//         }
//     },Listing
//     SearchResultList: {screen: SearchResultList},
//     SearchedPropertyView: {screen: SearchedPropertyView},
// });

export default class App extends React.Component {
    render() {
        return (
            <Listing/>
        )
    }
}