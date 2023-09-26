import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import LottieView from 'lottie-react-native';
import {colors} from '../utils/theme';
import {family, size} from '../utils/sizes';
const {width, height} = Dimensions.get('window');
const CustomLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles?.innerView}>
        <LottieView
          source={require('./animation2.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
        <CustomText
          text="Loading..."
          colors={colors?.white}
          size={size?.medium}
          font={family?.SP_BlackItalic}
        />
      </View>
    </View>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex:999,
    height: height,
  },
  innerView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
