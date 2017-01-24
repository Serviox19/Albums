import React from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';

const FooterTabs = () => {
  const { viewStyle } = styles;

  return (
    <Container style={viewStyle}>
      <Content />

      <Footer >
        <FooterTab >
          <Button>
            <Badge>1</Badge>
            <Icon name='ios-home' />
          </Button>
          <Button>
            <Icon name='ios-search' />
          </Button>
          <Button>
            <Badge>4</Badge>
            <Icon name='ios-trending-up' />
          </Button>
          <Button>
            <Icon name='ios-settings' />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = {
  viewStyle: {
    bottom: 0
  }
};

export default FooterTabs;
