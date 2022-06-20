import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';

const Index = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);
  return (
    <View style={styles.page}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Contact App</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    color: '#F48221',
    fontFamily: 'Poppins-Medium',
  },
});
