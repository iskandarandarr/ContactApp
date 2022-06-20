const initStateAddContact = {
  firstName: '',
  lastName: '',
  age: '',
  photo: '',
};

export const addContactReducer = (state = initStateAddContact, action) => {
  if (action.type === 'SET_ADDCONTACT') {
    return {
      ...state,
      firstName: action.value.firstName,
      lastName: action.value.lastName,
      age: action.value.age,
      photo: action.value.photo,
    };
  }
  return state;
};
