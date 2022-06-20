import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const index = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#53FF37',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    right: 10,
  },
  plus: {
    color: '#ffffff',
    fontSize: 40,
    fontFamily: 'Poppins-Medium',
  },
});
