import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'native-base';

class Header extends Component {
  render() {
    const { headerViewStyle, buttonStyle, textStyle } = styles;

    return (
      <View style={headerViewStyle}>
        <Button style={buttonStyle}>
          <Icon name='ios-menu' style={{ color: '#000' }} />
        </Button>
        <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = {
  headerViewStyle: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    marginTop: 22,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3.5 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
    alignItems: 'center'
  },
  buttonStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'transparent'
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '500',
    color: '#000'
  }
};


export default Header;
