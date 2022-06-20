import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const index = ({onPress, title, color = '#F48221', textColor = '#ffffff'}) => {
  return (
    <TouchableOpacity style={styles.container(color)} onPress={onPress}>
      <Text style={styles.title(textColor)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    marginHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }),
  title: textColor => ({
    fontSize: 20,
    color: textColor,
    fontFamily: 'Poppins-Medium',
  }),
});
