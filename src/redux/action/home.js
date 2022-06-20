import axios from 'axios';
import {API_URL} from '../../config';

export const HomeAction = () => dispatch => {
  axios.get(`${API_URL.url}/contact`).then(res => {
    dispatch({type: 'SET_CONTACT', value: res.data.data});
  });
};
