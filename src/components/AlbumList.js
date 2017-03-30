import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//class based component!
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://shrouded-scrubland-99138.herokuapp.com/api/albums')
    .then(response => {
        this.setState({ albums: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  renderAlbums() {
    return this.state.albums.map(data =>
      <AlbumDetail key={data.title} album={data} />
    );
  }

  render() {
    console.log(this.state.albums);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
