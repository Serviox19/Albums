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
            <Icon name='ios-home' />
            <Text>Home</Text>
          </Button>
          <Button>
            <Icon name='ios-search' />
            <Text>Search</Text>
          </Button>
          <Button>
            <Icon name='ios-trending-up' />
            <Text>Popular</Text>
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
