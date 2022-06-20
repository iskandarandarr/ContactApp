import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form, Gap, Header} from '../../components';
import {
  AddContactAction,
  DataContactAction,
  DeleteContactAction,
  EditContactAction,
} from '../../redux/action';

const Index = ({navigation, route}) => {
  const {firstName, lastName, age, photo} = useSelector(
    state => state.addContactReducer,
  );
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [ag, setAg] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, [firstName, lastName, age, photo]);

  const onSave = () => {
    const data = {
      firstName: first,
      lastName: last,
      age: ag,
      photo: photoUrl,
    };
    dispatch({type: 'SET_ADDCONTACT', value: data});
    dispatch(AddContactAction(data, navigation));
  };

  const onUpdate = () => {
    const data = {
      firstName: first,
      lastName: last,
      age: ag,
      photo: photoUrl,
    };
    dispatch({type: 'SET_ADDCONTACT', value: data});
    dispatch(EditContactAction(route.params.id, data, navigation));
  };

  const onDelete = () => {
    dispatch(DeleteContactAction(route.params.id, navigation));
  };

  const getData = () => {
    setFirst(firstName);
    setLast(lastName);
    setAg(age.toString());
    setPhotoUrl(photo);
    dispatch(DataContactAction(route.params.id));
  };

  return (
    <View style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header onPress={() => navigation.goBack()} />
        <Gap height={20} />
        <View style={styles.container}>
          <View style={styles.content}>
            <Form
              title="First Name"
              placeholder="Type Your First Name"
              value={first}
              onChangeText={value => setFirst(value)}
            />
            <Form
              title="Last Name"
              placeholder="Type Your Last Name"
              value={last}
              onChangeText={value => setLast(value)}
            />
            <Form
              title="Age"
              placeholder="Type Your Age"
              value={ag}
              onChangeText={value => setAg(value)}
            />
            <Form
              title="Photo URL"
              placeholder="Type Photo URL"
              value={photoUrl}
              onChangeText={value => setPhotoUrl(value)}
              multiline
            />
          </View>
          <View style={styles.btn}>
            {route.params.status == 'update' ? (
              <Button title="Update" onPress={onUpdate} />
            ) : (
              <Button title="Save" onPress={onSave} />
            )}
            <Gap height={10} />
            {route.params.status == 'update' ? (
              <Button
                title="Delete"
                onPress={onDelete}
                color="#D9435E"
                textColor="#000000"
              />
            ) : null}
          </View>
        </View>
      </ScrollView>
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
  btn: {
    marginBottom: 10,
  },
  content: {
    flexGrow: 1,
  },
});
