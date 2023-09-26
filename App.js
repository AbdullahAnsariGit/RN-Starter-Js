import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {useSelector} from 'react-redux';
import AuthNavigation from './src/navigation/AuthNavigation';

const App = () => {
  const isLogin = useSelector(state => state?.auth?.isUserLogin);
  console.log('🚀 ~ file: App.js:11 ~ App ~ isLogin:', isLogin);
  return isLogin == false ? <AuthNavigation /> : <AppNavigation />;
};

export default App;
const styles = StyleSheet.create({});
