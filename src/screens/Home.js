import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumList from '../components/AlbumList';
import Header from '../components/Header';

export default class HomeView extends Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Header headerText='Home' />
        <AlbumList />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8'
    // backgroundColor: '#3D7BBA'
  }
};
