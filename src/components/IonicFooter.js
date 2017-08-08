import React, { Component } from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

class IonicFooter extends Component {

  render() {
    const { footerStyle } = styles;
    return (
      <Footer style={footerStyle}>
        <FooterTab>
          <Button>
            <Icon name='ios-musical-notes' />
            <Text>Albums</Text>
          </Button>
          <Button>
            <Icon name='ios-film' />
            <Text>Movies</Text>
          </Button>
          <Button>
            <Icon name='ios-pricetags' />
            <Text>Products</Text>
          </Button>
          <Button>
            <Icon name='ios-cog' />
            <Text>Settings</Text>
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
