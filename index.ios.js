import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import Nav from './src/components/Nav';
import AlbumList from './src/components/AlbumList';

// const App = () => {};
const App = function () {
  return (
    <View>
      <Header headerText='Albums' />
      <AlbumList />
      <Nav />
    </View>
  );
};


//register Component to Screen
AppRegistry.registerComponent('albums', () => App);
