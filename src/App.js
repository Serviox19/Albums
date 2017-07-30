import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import HomeView from './screens/Home';
import IonicFooter from './components/IonicFooter';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <HomeView />
          <IonicFooter />
        </View>
      </Provider>
    );
  }
}
