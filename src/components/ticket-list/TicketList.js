/* eslint-disable react-hooks/exhaustive-deps */
import ticketListclass from './TicketList.module.scss';
import TicketItem from '../ticket-item/TicketItem';
import NoTicketsAvialable from '../no-tickets/NoTicketsAvialable';
import useFilteredTickets from '../../utilitys/ticket-list/useFilteredTickets';
import Spiner from '../spiner/spiner';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function TicketList() {
  const status = useSelector((state) => state.status);
  const ticketFilter = useSelector((state) => state.transferFilter);
  const ticketSort = useSelector((state) => state.sort);
  const arrTickets = useFilteredTickets();

  const [quantity, setQuantity] = useState(5);

  useEffect(() => {
    setQuantity(5);
  }, [ticketFilter, ticketSort]);

  const tickets = arrTickets.slice(0, quantity).map((ticket) => {
    const id = ticket.segments[0].date + ticket.segments[1].date;
    return <TicketItem key={id} {...ticket} />;
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
