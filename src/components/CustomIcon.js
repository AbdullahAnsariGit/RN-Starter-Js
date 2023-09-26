import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomIcon = ({size, src, resizeMode = 'contain'}) => {
  return (
    <View style={{height: size, width: size}}>
      <Image source={src} style={styles?.img} resizeMode={resizeMode} />
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
  },
});
