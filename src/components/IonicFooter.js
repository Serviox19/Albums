import React, { Component } from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

class IonicFooter extends Component {

  homeButtonPress() {
    console.log('Button has been pressed!');
  }

  render() {
    const { footerStyle } = styles;

    return (
      <Footer style={footerStyle}>
        <FooterTab>
          <Button onPress={this.homeButtonPress}>
            <Icon name='ios-home' />
            <Text>Home</Text>
          </Button>
          <Button>
            <Icon name='ios-search' />
            <Text>Search</Text>
          </Button>
          <Button>
            <Icon name='ios-trending-up' />
            <Text>Trending</Text>
          </Button>
          <Button>
            <Icon name='ios-list' />
            <Text>Library</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = {
  footerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
};

export default IonicFooter;
