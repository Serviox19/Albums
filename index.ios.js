import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import IonicFooter from './src/components/IonicFooter';

// const App = () => {};
const App = function () {
  const { appStyle } = styles;
  return (
    <View style={appStyle}>
      <Header headerText='Albums' />
      <AlbumList />
      <IonicFooter />
    </View>
  );
};

const styles = {
  appStyle: {
    backgroundColor: '#F8F8F8'
  }
};


//register Component to Screen
AppRegistry.registerComponent('albums', () => App);
