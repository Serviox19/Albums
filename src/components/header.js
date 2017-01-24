import React from 'react';
import { Text, View } from 'react-native';

const Header = function () {

  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 60,
    backgroundColor: '#F8F8F8',
    marginTop: 22,
    marginBottom: 20
  },
  textStyle: {
    height: 30,
    fontSize: 25,
    fontWeight: '500',
    color: 'blue',
    textAlign: 'center',
    alignItems: 'center',
    marginVertical: 15
  }
};


export default Header;
