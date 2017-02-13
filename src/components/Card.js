import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    padding: 10
  }
};

export default Card;
