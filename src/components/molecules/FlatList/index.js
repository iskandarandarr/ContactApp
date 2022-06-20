import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcNoImage, Logo, NullPhoto} from '../../../assets';

const index = ({firstName, lastName, age, photo, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.photoContent}>
        {photo == 'N/A' ? (
          <IcNoImage />
        ) : (
          // <Image source={Logo} style={styles.photo} />
          <Image source={{uri: photo}} style={styles.photo} />
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.subTitle}>{age} years old</Text>
      </View>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  content: {
    marginLeft: 10,
  },
  photoContent: {
    borderWidth: 1,
    borderColor: '#C6C2B9',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  subTitle: {
    color: '#C6C2B9',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
});
