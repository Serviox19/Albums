import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.album.title} || {props.album.artist}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    marginBottom: 25,
  },
  textStyle: {
    textAlign: 'center'
  }
};

export default AlbumDetail;
