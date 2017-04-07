import React from 'react';
import { AppRegistry, View } from 'react-native';
import HomeView from './src/views/Home';
// import SearchView from './src/views/Search';
// import PopularView from './src/views/Popular';

// const App = () => {};
const App = function () {
  return (
    <View >
      <HomeView />
    </View>
  );
};


//register Component to Screen
AppRegistry.registerComponent('albums', () => App);
