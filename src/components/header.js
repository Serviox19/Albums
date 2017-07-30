import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Button, Icon } from 'native-base';

class Header extends Component {

  render() {
    const { headerViewStyle, buttonView, textView, buttonStyle, textStyle } = styles;

    return (
      <View style={headerViewStyle}>
        <View style={buttonView}>
          <Button
            onPress={() =>
            Alert.alert('Yoooo')}
            style={buttonStyle}
          >
            <Icon name='ios-menu' style={{ color: '#007aff' }} />
          </Button>
        </View>
        <View style={textView}>
          <Text style={textStyle}>{this.props.headerText}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  headerViewStyle: {
    flexDirection: 'row',
    height: 60,
    paddingTop: 20,
    paddingBottom: 5,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3.5 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },
  buttonView: {
    alignSelf: 'center',
    paddingLeft: 10
  },
  textView: {
    alignSelf: 'center',
    marginLeft: 114
  },
  buttonStyle: {
    backgroundColor: 'transparent'
  },
  textStyle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000'
  }
};


export default Header;
