/* eslint-disable default-param-last */
const defaultState = false;

const onErrorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ERROR':
      return true;
    default:
      return state;
  }
};

export default onErrorReducer;
