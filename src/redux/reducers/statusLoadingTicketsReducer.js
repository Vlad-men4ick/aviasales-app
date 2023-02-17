const defaultState = 'LOADING';
const statusLoadingTicketsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'LOADING':
      return 'LOADING';
    case 'FINISH-LOADING':
      return 'FINISH-LOADING';
    case 'ERROR':
      return 'ERROR';
    default:
      return state;
  }
};

export default statusLoadingTicketsReducer;
