import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeView from './src/views/Home';
import PopularView from './src/views/Popular';
import SearchView from './src/views/Search';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return <HomeView />;
  }
}

class PopularScreen extends Component {
  static navigationOptions = {
    title: 'Popular',
  };
  render() {
    return <PopularView />;
  }
}

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
  };
  render() {
    return <SearchView />;
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Popular: { screen: PopularScreen },
  Search: { screen: SearchScreen }
});

AppRegistry.registerComponent('albums', () => App);
