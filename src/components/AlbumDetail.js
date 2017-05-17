import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card/Card';
import CardItem from './Card/CardItem';
import CardItemImage from './Card/CardItemImage';
import BuyButton from './buyButton';

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
          <View style={styles.buttonView}>
            <BuyButton buyNow={() => console.log(this.props.album.title)} />
          </View>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600'
  },
  cardStyle: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttonView: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10
  }
};
