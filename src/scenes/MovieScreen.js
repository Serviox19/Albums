import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MovieView extends Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text>Movie View!</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 22
  }
};
