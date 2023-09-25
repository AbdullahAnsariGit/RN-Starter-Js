import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { bg } from '../assets/images';
import CustomText from './CustomText';
import { family, size } from '../utils/sizes';
import { colors } from '../utils/theme';

const CustomContainer = ({ children }) => {
  
    const header = () => {
        return <View>
            {/* <CustomText text='Header' font={family?.SP_SemiBold_Italic} colors={colors?.white}/> */}
        </View>
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={bg}
                style={styles.backgroundImage}
            >
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
        flex: 1,
        resizeMode: 'cover',
    },
});