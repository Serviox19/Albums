import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IonicFooter from '../components/Footer';

export default class MovieView extends Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text>Movie View!</Text>
        <IonicFooter />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    marginTop: 20
  }
};
