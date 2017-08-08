import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ProductView extends Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text>Product View!</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 22
  }
};
