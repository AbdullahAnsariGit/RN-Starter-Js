import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import {bg} from '../assets/images';
import CustomText from './CustomText';
import {family, size} from '../utils/sizes';
import {colors} from '../utils/theme';
import CustomLoader from './CustomLoader';
import {useSelector} from 'react-redux';
const {height} = Dimensions.get('window');

const CustomContainer = ({children}) => {
  const loader = useSelector(state => state?.user?.loading);
  console.log(
    '🚀 ~ file: CustomContainer.js:12 ~ CustomContainer ~ loader:',
    loader,
  );
  const header = () => {
    return (
      <View>
        <CustomText text="heloo" size={size?.huge} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backgroundImage}>
        {loader && <CustomLoader />}
        {header()}
        {children}
      </ImageBackground>
    </View>
  );
};

export default CustomContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    // flex: 1,
    height: height,
    resizeMode: 'cover',
  },
});
