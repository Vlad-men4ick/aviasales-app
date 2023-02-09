/* eslint-disable default-param-last */
const defaultState = [];

const renderedTicketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INIT':
      return [...action.payload];
    case 'FILTER':
      return [...action.payload];
    case 'SORT':
      return [...action.payload];
    default:
      return state;
  }
};

export default renderedTicketsReducer;
