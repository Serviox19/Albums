import React, { Component } from 'react';
import { View } from 'react-native';
import HomeView from './screens/Home';
import IonicFooter from './components/IonicFooter';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HomeView />
        <IonicFooter />
      </View>
    );
  }
}
