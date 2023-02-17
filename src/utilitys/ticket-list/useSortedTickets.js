import { useSelector } from 'react-redux';

function useSortedTickets() {
  const tickets = useSelector((state) => state.tickets);
  const ticketSort = useSelector((state) => state.sort);
  const cheapSort = () => tickets.sort((prev, next) => prev.price - next.price);

  const fastSort = () => tickets.sort((prev, next) => prev.segments[0].duration - next.segments[0].duration);

  const optimalSort = () => tickets.sort((a, b) => a.carrier.localeCompare(b.carrier));
  const sortTickets = () => {
    switch (ticketSort) {
      case 'CHEAP':
        return [...cheapSort()];
      case 'FAST':
        return [...fastSort()];
      case 'OPTIMAL':
        return [...optimalSort()];
      default:
        return ticketSort;
    }
  };
  return sortTickets();
}

export default useSortedTickets;
