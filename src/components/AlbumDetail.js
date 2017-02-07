import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';

export default class AlbumDetail extends Component {
  render() {
    return (
      <Card>
        <Text>{this.props.album.title} || {this.props.album.artist}</Text>
      </Card>
    );
  }
}