import ticketListclass from './TicketList.module.scss';
import getSortedTickets from '../../utilitys/ticket-list/getSortedTickets';
import TicketItem from '../ticket-item/TicketItem';
import NoTicketsAvialable from '../no-tickets/NoTicketsAvialable';
import getFilteredTickets from '../../utilitys/ticket-list/getFilteredTickets';
import Spiner from '../spiner/spiner';
import { useSelector } from 'react-redux';
import { useEffect, useState, useMemo } from 'react';

function TicketList() {
  const status = useSelector((state) => state.status);
  const ticketFilter = useSelector((state) => state.transferFilter);
  const ticketSort = useSelector((state) => state.sort);
  const allTickets = useSelector((state) => state.tickets);
  const [quantity, setQuantity] = useState(5);

  const arrSortTickets = useMemo(() => getSortedTickets(allTickets, ticketSort), [allTickets, ticketSort]);

  const arrTickets = useMemo(() => getFilteredTickets(ticketFilter, arrSortTickets), [ticketFilter, arrSortTickets]);

  // console.log(arrTickets);

  useEffect(() => {
    setQuantity(5);
  }, [ticketFilter, ticketSort]);

  const tickets = arrTickets.slice(0, quantity).map((ticket) => {
    const id = ticket.segments[0].date + ticket.segments[1].date;
    return <TicketItem key={id} {...ticket} id={id} />;
  });

  const showMore = (
    <button type="button" className={ticketListclass['show-more-btn']} onClick={() => setQuantity((s) => s + 5)}>
      Показать еще 5 билетов!
    </button>
  );

  const ticketList = () => (
    <>
      {status === 'LOADING' ? <Spiner /> : null}
      {tickets}
      {showMore}
    </>
  );

  return (
    <div className={ticketListclass['ticket-wrapper']}>
      {!ticketFilter.includes(true) ? <NoTicketsAvialable /> : ticketList()}
    </div>
  );
}

export default TicketList;
