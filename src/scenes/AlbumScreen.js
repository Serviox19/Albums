import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumList from '../components/AlbumList';
import Header from '../components/Header';
import IonicFooter from '../components/IonicFooter';

export default class AlbumView extends Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Header headerText='Home' />
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
