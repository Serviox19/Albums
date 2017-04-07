import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import AlbumList from '../components/AlbumList';
import IonicFooter from '../components/IonicFooter';

export default class HomeView extends Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Header headerText='Albums' />
        <AlbumList />
        <IonicFooter />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#3D7BBA'
    // backgroundColor: '#F8F8F8'
  }
};
