import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import CardItemImage from './CardItemImage';

export default class AlbumDetail extends Component {
  render() {
    return (
      <Card style={styles.cardStyle}>
        <CardItem>
          <Text style={styles.textStyle}>{this.props.album.title}</Text>
        </CardItem>
        <CardItemImage>
          {this.props.album.cover}
        </CardItemImage>
        <CardItem>
          <Text style={styles.textStyle}>{this.props.album.artist}</Text>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 16,
    color: 'red',
    fontWeight: '600'
  },
  cardStyle: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  imageContainerStyle: {
    paddingLeft: 'auto',
    paddingRight: 'auto'
  }
};
