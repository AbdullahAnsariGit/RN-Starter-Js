import React, {useRef} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Formik} from 'formik';
import CustomInput from '../../../components/CustomInput';
import {ValidationSchema} from './Validation';
import {colors} from '../../../utils/theme';

const LoginForm = ({submit}) => {
  const form = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSubmitForm = values => {
    submit(values);
  };
  return (
    <Formik
      innerRef={form}
      initialValues={{email: '', password: ''}}
      onSubmit={handleSubmitForm}
      validationSchema={ValidationSchema}>
      {({handleChange, handleBlur, values, errors, handleSubmit}) => (
        <View>
          <View style={{padding: 20}}>
            <CustomInput
              ref={email}
              value={values?.email}
              onBlur={handleBlur('email')}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              error={errors?.email}
            />
            <CustomInput
              ref={password}
              value={values?.password}
              onBlur={handleBlur('password')}
              placeholder="Password"
              onChangeText={handleChange('password')}
              error={errors?.password}
            />
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              backgroundColor: 'blue',
              padding: 20,
              marginHorizontal: 20,
            }}>
            <Text style={{color: colors?.white}}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
export default LoginForm;
