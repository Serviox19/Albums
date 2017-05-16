import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import HomeView from './src/screens/Home';
import IonicFooter from './src/components/IonicFooter';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HomeView />
        <IonicFooter />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
