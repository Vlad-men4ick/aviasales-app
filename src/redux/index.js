/* eslint-disable import/prefer-default-export */
import searchIdReducer from './searchIdReducer';
import ticketsReducer from './ticketsReducer';
import transferFilterReducer from './transferFilterReducer';
import loadingReducer from './onLoadingReducer';
import onErrorReducer from './onErrorReducer';
import sortTicketsReducer from './sortTicketsReducer';
import quantityTickets from './quantityTicketsReducer';
import renderedTicketsReducer from './renderedTicketsReducer';
import areAllTicketsLoaded from './areAllTicketsLoaded';
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
  renderedTicket: renderedTicketsReducer,
  allTicketsLoaded: areAllTicketsLoaded,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;
