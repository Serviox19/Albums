import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

export default class AlbumDetail extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Text>{this.props.album.title}</Text>
        </CardItem>
        <CardItem>
          <Text>{this.props.album.artist}</Text>
        </CardItem>
      </Card>
    );
  }
}
