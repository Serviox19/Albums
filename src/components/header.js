import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
  render() {
    const { viewStyle, textStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    height: 60,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3.5 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    height: 30,
    fontSize: 25,
    fontWeight: '600',
    color: '#000'
  }
};


export default Header;
