import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// const App = () => {};
const App = function () {
  return (
    <Header headerText='Albums' />
  );
};

//register Component to Screen
AppRegistry.registerComponent('albums', () => App);
