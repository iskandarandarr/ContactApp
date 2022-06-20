import {combineReducers} from 'redux';
import {homeReducer} from './home';
import {globalReducer} from './global';
import {addContactReducer} from './addContact';

const reducer = combineReducers({
  homeReducer,
  globalReducer,
  addContactReducer,
});

export default reducer;
