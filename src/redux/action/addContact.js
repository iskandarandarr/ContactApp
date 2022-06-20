import axios from 'axios';
import {API_URL} from '../../config';
import {showMessage} from '../../utils';
import {setLoading} from './global';

export const AddContactAction = (dataAddContact, navigation) => dispatch => {
  dispatch(setLoading(true));
  axios
    .post(`${API_URL.url}/contact`, dataAddContact)
    .then(res => {
      dispatch(setLoading(false));
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    })
    .catch(err => {
      showMessage(
        `${err?.response?.data?.message}` ||
          'Terjadi Kesalahan Saat Input Data',
      );
      dispatch(setLoading(false));
    });
};

export const DataContactAction = idContact => dispatch => {
  dispatch(setLoading(true));
  axios
    .get(`${API_URL.url}/contact/${idContact}`)
    .then(res => {
      const data = {
        firstName: res.data.data.firstName,
        lastName: res.data.data.lastName,
        age: res.data.data.age,
        photo: res.data.data.photo,
      };
      dispatch({type: 'SET_ADDCONTACT', value: data});
      dispatch(setLoading(false));
    })
    .catch(err => {
      console.log('gagal get data by id', err);
      dispatch(setLoading(false));
    });
};

export const EditContactAction =
  (idContact, dataContact, navigation) => dispatch => {
    dispatch(setLoading(true));
    axios
      .put(`${API_URL.url}/contact/${idContact}`, dataContact)
      .then(res => {
        dispatch(setLoading(false));
        navigation.reset({index: 0, routes: [{name: 'Home'}]});
      })
      .catch(err => {
        showMessage(
          `${err?.response?.data?.message}` ||
            'Terjadi Kesalahan Saat Input Data',
        );
        dispatch(setLoading(false));
      });
  };

export const DeleteContactAction = (idContact, navigation) => dispatch => {
  dispatch(setLoading(true));
  axios
    .delete(`${API_URL.url}/contact/${idContact}`)
    .then(res => {
      dispatch(setLoading(false));
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage(`${err?.response?.data?.message}` || 'Delete failed');
    });
};
