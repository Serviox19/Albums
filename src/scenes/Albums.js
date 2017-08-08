import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumList from '../components/AlbumList';
import IonicFooter from '../components/Footer';

export default class AlbumView extends Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <AlbumList />
        <IonicFooter />
      </View>
    );
  }
}

const styles = {
  viewStyle: {

  }
};
