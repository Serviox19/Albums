import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import AlbumDetail from './AlbumDetail';

//class based component!
class AlbumList extends Component {
  // state = { albums: [] };
  //
  // componentWillMount() {
  //   axios.get('https://shrouded-scrubland-99138.herokuapp.com/api/albums')
  //   .then(response => {
  //     this.setState({ albums: response.data });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }

  renderAlbums() {
    console.log(this.state);
    console.log(this.props);
    return this.state.albums.map(data =>
      <AlbumDetail key={data.title} album={data} />
    );
  }

  render() {
    const { viewStyle } = styles;
    // console.log(this.state.albums);
    return (
      <ScrollView style={viewStyle}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    marginBottom: 55
  }
};

const mapStateToProps = state => {
  return { albums: state.albums };
};

export default connect(mapStateToProps)(AlbumList);
