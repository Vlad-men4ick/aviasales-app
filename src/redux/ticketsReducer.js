/* eslint-disable default-param-last */
const defaultState = [];

const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET-FIRST-TICKETS':
      return [...action.payload];
    default:
      return state;
  }
};

export default ticketsReducer;
