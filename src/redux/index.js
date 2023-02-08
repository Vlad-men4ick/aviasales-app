/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import searchIdReducer from './searchIdReducer';
import ticketsReducer from './ticketsReducer';
import transferFilterReducer from './transferFilterReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { loggerMiddleware } from "../index";
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  transferFilter: transferFilterReducer,
  searchId: searchIdReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
};

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware, reduxThunk)));
