import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { albumsFetch } from '../actions';
import AlbumDetail from './AlbumDetail';

//class based component!
class AlbumList extends Component {

  componentWillMount() {
    this.props.albumsFetch();
  }

  renderAlbums() {
    this.props.albums.map(data =>
      <AlbumDetail key={data.title} album={data} />
    );
  }

  render() {
    const { viewStyle } = styles;
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
  console.log(state);
  return { albums: state.albums };
};

export default connect(mapStateToProps, { albumsFetch })(AlbumList);
