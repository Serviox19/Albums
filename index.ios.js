import React from 'react';
import { Text, AppRegistry } from 'react-native';

// const App = () => {};

const App = function () {
  return (
    <Text>Welcome TO React Native IOS</Text>
  );
};

//register Component to Screen
AppRegistry.registerComponent('albums', () => App);
