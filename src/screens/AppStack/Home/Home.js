import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils/theme';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../../../redux/actions/authAction';
import Popup from '../../../containers/Popup/Popup';
import {postMethod} from '../../../services/Api';

const Home = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const disPatch = useDispatch();

  const handleApiCall = async() => {
    const res = await postMethod({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })

    console.log('rsssses', res);
  };
  return (
    <View style={{gap: 20}}>
      <Popup
        onBackButtonPress={() => setIsVisible(false)}
        onBackdropPress={() => setIsVisible(false)}
        isVisible={isVisible}
      />
      <TouchableOpacity
        onPress={() => navigation?.navigate('Details')}
        style={{backgroundColor: 'red', padding: 20}}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => disPatch(logoutUser())}
        style={{backgroundColor: 'blue', padding: 20}}>
        <Text style={{color: colors?.white}}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsVisible(true)}
        style={{backgroundColor: 'blue', padding: 20}}>
        <Text style={{color: colors?.white}}>Show Popup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleApiCall}
        style={{backgroundColor: 'green', padding: 20}}>
        <Text style={{color: colors?.white}}>Call Api</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
