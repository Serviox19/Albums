import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//class based component!
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => {
      const album = response.data;
      for (var i = 0; i < album.length; i++) {
        this.setState({ albums: album[i] });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
