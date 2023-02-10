import {
  initSearchIdAction,
  getTicketsAction,
  finishLoadingAction,
  stopLoadTicketsAction,
  onErrorAction,
} from '../redux/actions';

let countFetch = 10;

const _baseURL = new URL('https://aviasales-test-api.kata.academy/');

export const getSearchId = () => (dispatch) => {
  const getSearch_Id_URL = new URL('search', _baseURL);
  fetch(`${getSearch_Id_URL}`)
    .then((response) => response.json())
    .then((search) => dispatch(initSearchIdAction(search.searchId)));
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
        dispatch(finishLoadingAction);
        dispatch(getTickets(searchId));
      } else if (tickets.stop) {
        dispatch(stopLoadTicketsAction());
      }
    })
    .catch(() => {
      countFetch -= 1;
      if (countFetch > 0) {
        dispatch(getTickets(searchId));
      }
    });
};
