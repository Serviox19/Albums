import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AlbumDetail extends Component {
  render() {
    const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.album.title} || {this.props.album.artist}</Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    textAlign: 'center'
  },
  viewStyle: {
    marginBottom: 20
  }
};
