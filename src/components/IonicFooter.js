import React from 'react';
import { Footer, FooterTab, Button, Icon, Badge } from 'native-base';

const IonicFooter = () => {
  const { footerStyle } = styles;

  return (
    <Footer style={footerStyle}>
      <FooterTab>
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
  );
};

const styles = {

};

export default IonicFooter;
