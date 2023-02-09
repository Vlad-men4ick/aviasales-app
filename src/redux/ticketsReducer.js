/* eslint-disable default-param-last */
// /* eslint-disable default-param-last */
// /* eslint-disable no-case-declarations */
// const defaultState = [];

// const ticketsReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'GET-FIRST-TICKETS':
//       return [...action.payload];

//     case 'SORT-CHEAP-TICKETS':
//       const cheapTickets = state.sort((prev, next) => prev.price - next.price);
//       return [...cheapTickets];

//     case 'SORT-FAST-TICKETS':
//       const fastTickets = state.sort((prev, next) => prev.segments[0].duration - next.segments[0].duration);
//       return [...fastTickets];

//     case 'SORT-OPTIMAL-TICKETS':
//       const optimalTickets = state.sort(
//         (prev, next) => prev.segments[0].duration - next.segments[0].duration || prev.price - next.price
//       );
//       return [...optimalTickets];

//     default:
//       return state;
//   }
// };

// export default ticketsReducer;

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
