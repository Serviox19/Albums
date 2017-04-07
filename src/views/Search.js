import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SearchView extends Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text>Search View</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 22
  }
};
