import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//class based component!
class AlbumList extends Component {
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(function (response) {
      const albums = response.data;
      for (var i = 0; i < albums.length; i++) {
        console.log(albums[i]);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
