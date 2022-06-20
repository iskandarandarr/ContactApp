import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcBack} from '../../../assets';

const index = ({onPress}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={onPress} style={styles.back}>
        <IcBack />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>Add Contact</Text>
        <Text style={styles.subTitle}>Create New Contact</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  back: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-Normal',
  },
  subTitle: {
    color: '#C6C2B9',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
});
