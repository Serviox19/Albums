import React from 'react';
import { Text, View } from 'react-native';

//basic footer created to test something

const Footer = () => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Footer</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 60,
    backgroundColor: '#000',
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: 'blue',
    fontSize: 25,
    fontWeight: '500'
  }
};

export default Footer;
