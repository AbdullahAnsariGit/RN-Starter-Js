import React, { forwardRef, memo } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const CustomInput = forwardRef(({
  value,
  placeholder,
  onChangeText,
  style,
  validator,
  error,
  ...props
}, ref) => {
  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        style={[styles.input, style]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
});

export default memo(CustomInput);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});
