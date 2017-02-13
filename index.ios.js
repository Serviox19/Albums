import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import IonicFooter from './src/components/IonicFooter';

// const App = () => {};
const App = function () {
  return (
    <View>
      <Header headerText='Albums' />
      <AlbumList />
      <View>
        <IonicFooter />
      </View>
    </View>
  );
};


//register Component to Screen
AppRegistry.registerComponent('albums', () => App);
