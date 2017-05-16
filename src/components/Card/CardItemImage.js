import React from 'react';
import { View, Image } from 'react-native';

const CardItemImage = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Image
        source={{ uri: props.children }}
        style={styles.thumbnailStyle}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    padding: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
  thumbnailStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default CardItemImage;
