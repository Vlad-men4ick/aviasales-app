export const allTickets = { type: 'ALL' };

export const noTransfers = { type: 'NO' };

export const oneTransfer = { type: 'ONE-TRANSFER' };

export const twoTransfers = { type: 'TWO-TRANSFERS' };

export const threeTransfers = { type: 'THREE-TRANSFERS' };

export const onloadingAction = { type: 'LOADING' };

export const finishLoadingAction = { type: 'FINISH-LOADING' };

export const onErrorAction = { type: 'ERROR' };

export const sortCheapTicketsAction = { type: 'SORT-CHEAP-TICKETS' };

export const sortFastTicketsAction = { type: 'SORT-FAST-TICKETS' };

export const sortOptimalTicketsAction = { type: 'SORT-OPTIMAL-TICKETS' };

export const showMoreAction = { type: 'SHOW-MORE' };

export const backToFiveAction = { type: 'BACK-TO-5' };

export const initSearchIdAction = (payload) => ({
  type: 'INIT-SEARCH-ID',
  payload,
});

export const getFirstTicketsAction = (payload) => ({
  type: 'GET-FIRST-TICKETS',
  payload,
});
