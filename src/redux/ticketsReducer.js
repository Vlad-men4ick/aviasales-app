const defaultState = [];

const ticketsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'GET-TICKETS':
      return [...action.payload, ...state];

    default:
      return state;
  }
};

export default ticketsReducer;
