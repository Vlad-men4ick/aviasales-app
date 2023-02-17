/* eslint-disable import/prefer-default-export */
import { getTicketsAction, finishLoadingAction, onErrorAction } from '../redux/actions/actions';

let countFetch = 10;

const _baseURL = new URL('https://aviasales-test-api.kata.academy/');

export const getSearchId = async () => {
  const getSearch_Id_URL = new URL('search', _baseURL);
  const response = await fetch(`${getSearch_Id_URL}`);
  const search = await response.json();
  return search;
};

export const getTickets = (searchId) => (dispatch) => {
  const getTickets_URL = new URL('tickets', _baseURL);
  getTickets_URL.searchParams.set('searchId', searchId);
  fetch(`${getTickets_URL}`)
    .then((response) => {
      if (response.status >= 400 && response.status < 500) {
        dispatch(onErrorAction);
      }
      return response.json();
    })
    .then((tickets) => {
      if (!tickets.stop) {
        dispatch(getTicketsAction(tickets.tickets));
        dispatch(getTickets(searchId));
      } else if (tickets.stop) {
        dispatch(finishLoadingAction);
      }
    })
    .catch(() => {
      countFetch -= 1;
      if (countFetch > 0) {
        dispatch(getTickets(searchId));
      }
    });
};
