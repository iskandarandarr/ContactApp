import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const index = () => {
  const [photo, setPhoto] = useState('');
  const AddPhoto = () => {
    launchImageLibrary({}, response => {
      console.log('response :', response);
      if (response.didCancel || response.errorMessage) {
        console.log('anda tidak memilih foto');
      } else {
        const source = {uri: response.assets[0].uri};
        const dataImage = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        setPhoto(source);
      }
    });
  };

  return (
    <View style={styles.page}>
      {photo ? (
        <Image source={photo} style={styles.container} />
      ) : (
        <TouchableOpacity style={styles.container} onPress={AddPhoto}>
          <Text style={styles.text}>Add</Text>
          <Text style={styles.text}>Photo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  container: {
    backgroundColor: '#DADADA',
    width: 90,
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
