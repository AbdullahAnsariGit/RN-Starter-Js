import React from 'react';
import Modal from 'react-native-modal';
export default function CustomModal(props) {
  return (
    <Modal
      style={props.style}
      animationIn="slideInRight"
      animationOut="slideOutLeft"
      animationInTiming={600}
      animationOutTiming={600}
      backdropColor={props?.backdropColor ? props?.backdropColor : '#000'}
      backdropOpacity={props?.backdropOpacity ? props?.backdropOpacity : 0.85}
      transparent={true}
      isVisible={props.visible}
      onBackButtonPress={props?.onBackButtonPress}
      onBackdropPress={props?.onBackButtonPress}>
      {props?.children}
    </Modal>
  );
}
