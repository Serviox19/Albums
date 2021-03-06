import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BuyButton = (props) => { // eslint-disable-line

  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={props.buyNow} style={buttonStyle}>
      <Text style={textStyle}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#fff',
    fontSize: 14,
    padding: 5
  },
  buttonStyle: {
    margin: 5,
    backgroundColor: '#007aff',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#007aff',
  }
};

export default BuyButton;
