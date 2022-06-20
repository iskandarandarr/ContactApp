import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NullPhoto} from '../../../assets';

const index = ({nama}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Hallo {nama}</Text>
        <Text style={styles.subTitle}>Welcome to Contact App</Text>
      </View>
      <View style={styles.photo}>
        <NullPhoto />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container: {
    justifyContent: 'center',
  },
  photo: {
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#C6C2B9',
  },
  title: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  subTitle: {
    fontSize: 14,
    color: '#C6C2B9',
    fontFamily: 'Poppins-Light',
  },
});
