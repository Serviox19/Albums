import React from 'react';
import { Text } from 'react-native';

const Header = function () {

  const { textStyle } = styles;

  return (
    <Text style={textStyle}>Albums!</Text>
  );
};

const styles = {
  textStyle: {
    fontSize: 25,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 20,
    color: 'red',
    textAlign: 'center'
  }
};


export default Header;
