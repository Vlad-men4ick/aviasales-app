/* eslint-disable consistent-return */
/* eslint-disable default-param-last */
const defaultState = [];

const renderedTicketsReducer = (state = defaultState, action = {}) => {
  const allFilter = () => action.payload.filter((ticket) => ticket);

  const noTransfer = () => action.payload.filter((ticket) => ticket.segments[0].stops.length === 0);

  const oneTransfer = () => action.payload.filter((ticket) => ticket.segments[0].stops.length === 1);

  const twoTransfers = () => action.payload.filter((ticket) => ticket.segments[0].stops.length === 2);

  const threeTransfers = () => action.payload.filter((ticket) => ticket.segments[0].stops.length === 3);

  const filters = [allFilter, noTransfer, oneTransfer, twoTransfers, threeTransfers];
  const resArr = [];

  const cheapSort = () => state.sort((prev, next) => prev.price - next.price);

  const fastSort = () => state.sort((prev, next) => prev.segments[0].duration - next.segments[0].duration);

  const optimalSort = () => state.sort((a, b) => a.carrier.localeCompare(b.carrier));

  switch (action.type) {
    case 'INIT':
      return [...action.payload];

    case 'FILTER':
      if (action.filter[0]) {
        return [...action.payload];
      }
      if (!action.filter.includes(true)) {
        return [];
      }
      action.filter.slice(1).forEach((filterInput, idx) => {
        if (filterInput) {
          const filterResult = filters[idx + 1]();
          resArr.push(...filterResult);
        }
      });
      return [...resArr];

    case 'SORT':
      if (action.sort === 'CHEAP') {
        return [...cheapSort()];
      }
      if (action.sort === 'FAST') {
        return [...fastSort()];
      }
      if (action.sort === 'OPTIMAL') {
        return [...optimalSort()];
      }
      break;

    default:
      return state;
  }
};

export default renderedTicketsReducer;
