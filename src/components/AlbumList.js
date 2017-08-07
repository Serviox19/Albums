import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { albumsFetch } from '../actions';
import AlbumDetail from './AlbumDetail';

//class based component!
class AlbumList extends Component {
  componentWillMount() {
    this.props.albumsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
    console.log(nextProps);
  }

  createDataSource({ albums }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(albums);
  }

  renderRow(album) {
    return <AlbumDetail album={album.albums} />;
  }

  render() {
    const { viewStyle } = styles;
    return (
      <ListView
        style={viewStyle}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = {
  viewStyle: {
    marginBottom: 55
  }
};

const mapStateToProps = state => {
  const albums = _.map(state.albums, (albums) => {
    return { albums };
  });

  return { albums };
};

export default connect(mapStateToProps, { albumsFetch })(AlbumList);
