import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {AddButton, Flatlist, Gap, HeaderHome} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {HomeAction} from '../../redux/action/home';

const Index = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.homeReducer);
  useEffect(() => {
    console.log('data data', data);
    dispatch(HomeAction());
  }, []);
  return (
    <View style={styles.page}>
      <HeaderHome nama="Iskandar" />
      <Gap height={20} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {data.map(res => {
          return (
            <Flatlist
              key={res.id}
              firstName={res.firstName}
              lastName={res.lastName}
              age={res.age}
              photo={res.photo}
              onPress={() =>
                navigation.navigate('DetailContact', {
                  id: res.id,
                  status: 'update',
                })
              }
            />
          );
        })}
      </ScrollView>
      <AddButton
        onPress={() => navigation.navigate('DetailContact', {status: 'add'})}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingTop: 10,
  },
});
