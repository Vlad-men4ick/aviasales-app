const getFilteredTickets = (ticketFilter, arrSortTickets) => {
  const allFilter = () => arrSortTickets.filter((ticket) => ticket);

  const noTransfer = () => arrSortTickets.filter((ticket) => ticket.segments[0].stops.length === 0);

  const oneTransfer = () => arrSortTickets.filter((ticket) => ticket.segments[0].stops.length === 1);

  const twoTransfers = () => arrSortTickets.filter((ticket) => ticket.segments[0].stops.length === 2);

  const threeTransfers = () => arrSortTickets.filter((ticket) => ticket.segments[0].stops.length === 3);
  const filters = [allFilter, noTransfer, oneTransfer, twoTransfers, threeTransfers];
  const resArr = [];
  if (!ticketFilter.includes(false)) {
    return [...allFilter()];
  }
  if (!ticketFilter) {
    return [];
  }
  ticketFilter.forEach((input, idx) => {
    if (input) {
      const filterResult = filters[idx]();
      resArr.push(...filterResult);
    }
  });
  // console.log('getFilteredTickets');
  return [...resArr];
};

export default getFilteredTickets;
