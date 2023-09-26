import {StyleSheet} from 'react-native';
import React from 'react';
import LoginForm from './Form';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../redux/actions/authAction';
const Login = () => {
  const disPatch = useDispatch();
  const handleLogin = values => {
    disPatch(loginUser(values));
  };
  return <LoginForm submit={handleLogin} />;
};

export default Login;

const styles = StyleSheet.create({});
