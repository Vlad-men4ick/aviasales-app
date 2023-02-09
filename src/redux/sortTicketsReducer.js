/* eslint-disable default-param-last */
const defaultState = 'NO-SORT';

const sortTicketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'NO-SORT':
      return 'NO-SORT';
    case 'CHEAP':
      return 'CHEAP';
    case 'FAST':
      return 'FAST';
    case 'OPTIMAL':
      return 'OPTIMAL';
    default:
      return state;
  }
};

export default sortTicketsReducer;
