/* eslint-disable default-param-last */
const defaultState = true;

const loadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOADING':
      return true;
    case 'FINISH-LOADING':
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
