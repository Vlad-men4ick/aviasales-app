/* eslint-disable default-param-last */
const defaultState = [false, false, false, false, false];

const transferFilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ALL':
      if (!state[0]) return [true, true, true, true, true];
      return [false, false, false, false, false];

    case 'NO':
      if (state[0]) return [false, false, true, true, true];
      if (!state[1] && state[2] && state[3] && state[4]) return [true, true, true, true, true];
      return [state[0], !state[1], state[2], state[3], state[4]];

    case 'ONE-TRANSFER':
      if (state[0]) return [false, true, false, true, true];
      if (state[1] && !state[2] && state[3] && state[4]) return [true, true, true, true, true];
      return [state[0], state[1], !state[2], state[3], state[4]];

    case 'TWO-TRANSFERS':
      if (state[0]) return [false, true, true, false, true];
      if (state[1] && state[2] && !state[3] && state[4]) return [true, true, true, true, true];
      return [state[0], state[1], state[2], !state[3], state[4]];

    case 'THREE-TRANSFERS':
      if (state[0]) return [false, true, true, true, false];
      if (state[1] && state[2] && state[3] && !state[4]) return [true, true, true, true, true];
      return [state[0], state[1], state[2], state[3], !state[4]];

    default:
      return state;
  }
};

export default transferFilterReducer;
