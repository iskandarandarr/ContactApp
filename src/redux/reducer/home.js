const initHome = {
  data: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_CONTACT') {
    return {
      ...state,
      data: action.value,
    };
  }
  return state;
};
