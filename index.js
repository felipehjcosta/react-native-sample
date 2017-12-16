import { AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import SearchScreen from './SearchScreen';
import SearchResultList from './SearchResultList.js';
import SearchedPropertyView from './SearchedPropertyView.js';

const App = StackNavigator({
  SearchScreen: { 
    screen: SearchScreen,
    navigationOptions: {
      title: 'FindProperty'
    }
  },
  SearchResultList: { screen: SearchResultList },
  SearchedPropertyView: { screen: SearchedPropertyView },
});

AppRegistry.registerComponent('PropertyFinder', () => App);
