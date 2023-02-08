import { initSearchIdAction, getFirstTicketsAction, finishLoadingAction, onErrorAction } from '../../redux/actions';

export const getSearchId = () => (dispatch) => {
  fetch('https://aviasales-test-api.kata.academy/search')
    .then((response) => response.json())
    .then((search) => dispatch(initSearchIdAction(search.searchId)));
};

export const getFirstTickets = (searchId) => (dispatch) => {
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    .then((response) => response.json())
    .then((tickets) => {
      dispatch(getFirstTicketsAction(tickets.tickets));
      dispatch(finishLoadingAction);
    })
    .catch(() => {
      dispatch(onErrorAction);
      dispatch(finishLoadingAction);
    });
};
