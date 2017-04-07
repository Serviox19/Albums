import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PopularView extends Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text>Popular Music!</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 22
  }
};
