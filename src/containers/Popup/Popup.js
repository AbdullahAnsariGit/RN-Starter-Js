import React from 'react';
import {View, Text} from 'react-native';
import CustomModal from '../../components/CustomModal';

const Popup = ({isVisible, onBackdropPress, onBackButtonPress}) => {
  return (
    <CustomModal
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}
      visible={isVisible}
      animationIn="slideInRight"
      animationOut="slideOutLeft">
      <View style={{padding: 20, backgroundColor:'white'}}>
        <Text>Some text here</Text>
      </View>
    </CustomModal>
  );
};

export default Popup;
