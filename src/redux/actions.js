export const allTickets = { type: 'ALL' };

export const noTransfers = { type: 'NO' };

export const oneTransfer = { type: 'ONE-TRANSFER' };

export const twoTransfers = { type: 'TWO-TRANSFERS' };

export const threeTransfers = { type: 'THREE-TRANSFERS' };

export const initSearchIdAction = (payload) => ({
  type: 'INIT-SEARCH-ID',
  payload,
});

export const getFirstTicketsAction = (payload) => ({
  type: 'GET-FIRST-TICKETS',
  payload,
});
