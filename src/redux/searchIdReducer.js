/* eslint-disable default-param-last */
const defaultState = '';

const searchIdReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INIT-SEARCH-ID':
      return action.payload;
    default:
      return state;
  }
};

export default searchIdReducer;
