import { AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import SearchScreen from './SearchScreen';
import SearchResultList from './SearchResultList.js';

const App = StackNavigator({
  SearchScreen: { screen: SearchScreen },
  SearchResultList: { screen: SearchResultList },
});

AppRegistry.registerComponent('PropertyFinder', () => App);
