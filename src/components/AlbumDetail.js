import React, { Component } from 'react';
import { Text, Image } from 'react-native';
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
          <Image
            source={{ uri: this.props.album.cover }}
            style={{
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center' }}
          />
        </CardItem>
        <CardItem>
          <Text>{this.props.album.artist}</Text>
        </CardItem>
      </Card>
    );
  }
}
