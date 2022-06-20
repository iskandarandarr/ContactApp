import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const index = ({title, placeholder, ...restProps}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
  },
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
