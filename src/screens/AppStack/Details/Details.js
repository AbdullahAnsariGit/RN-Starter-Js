import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import CustomContainer from '../../../components/CustomContainer';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserData} from '../../../redux/actions/userAction';
import {colors} from '../../../utils/theme';
import {fetchPosts} from '../../../redux/actions/postAction';
import CustomInput from '../../../components/CustomInput';
import Icon from 'react-native-vector-icons/Ionicons';
const Details = () => {


  const disPatch = useDispatch();
  const handlePostApi = () => {
    const dataToPost = {
      userId: 1,
      title: 'Sample title',
      body: 'Sample body content',
    };
    disPatch(fetchPosts(dataToPost));
  };
  useEffect(() => {
    disPatch(fetchUserData());
  }, [disPatch]);

  const userData = useSelector(state => state?.user?.data);
  const post = useSelector(state => state?.post);
  console.log('🚀 ~ file: Details.js:23 ~ Details ~ post:', post);
  console.log('🚀 ~ file: Details.js:10 ~ Details ~ userData:', userData);

  return (
    <CustomContainer
      children={
        <View>
          <Text style={{color: '#000'}}>Text</Text>
          <Icon name="accessibility" size={20} color="#4F8EF7"/>
        </View>
      }
    />
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
  },
  card: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    marginTop: 10,
  },
  company: {
    marginTop: 10,
  },
});
