/* eslint-disable default-param-last */
const defaultState = 5;

const quantityTickets = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW-MORE':
      return state + 5;
    case 'BACK-TO-5':
      return 5;
    default:
      return state;
  }
};

export default quantityTickets;
