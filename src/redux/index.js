/* eslint-disable import/prefer-default-export */
// import { loggerMiddleware } from "../index";
import searchIdReducer from './searchIdReducer';
import ticketsReducer from './ticketsReducer';
import transferFilterReducer from './transferFilterReducer';
import loadingReducer from './onLoadingReducer';
import onErrorReducer from './onErrorReducer';
import sortTicketsReducer from './sortTicketsReducer';
import quantityTickets from './quantityTicketsReducer';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  transferFilter: transferFilterReducer,
  searchId: searchIdReducer,
  onLoad: loadingReducer,
  onError: onErrorReducer,
  sort: sortTicketsReducer,
  quantityTickets,
});

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
};

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware, reduxThunk)));
