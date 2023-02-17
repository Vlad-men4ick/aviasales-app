/* eslint-disable import/prefer-default-export */
import ticketsReducer from '../reducers/ticketsReducer';
import transferFilterReducer from '../reducers/transferFilterReducer';
import statusLoadingTicketsReducer from '../reducers/statusLoadingTicketsReducer';
import sortTicketsReducer from '../reducers/sortTicketsReducer';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  transferFilter: transferFilterReducer,
  status: statusLoadingTicketsReducer,
  sort: sortTicketsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;
