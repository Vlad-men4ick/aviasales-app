/* eslint-disable react/button-has-type */
import ticketListclass from './TicketList.module.scss';
import TicketItem from '../ticket-item/TicketItem';
import { showMoreAction } from '../../redux/actions';
import NoTicketsAvialable from '../no-tickets/NoTicketsAvialable';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function TicketList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const quantityTickets = useSelector((state) => state.quantityTickets);
  const renderedTicket = useSelector((state) => state.renderedTicket);

  const tickets = selector.renderedTicket
    .slice(0, selector.quantityTickets)
    .map((ticket) => <TicketItem key={uuidv4()} {...ticket} />);

  const showMore = (
    <button type="button" className={ticketListclass['show-more-btn']} onClick={() => dispatch(showMoreAction)}>
      Показать еще 5 билетов!
    </button>
  );

  const ticketList = () => (
    <>
      {tickets}
      {quantityTickets >= renderedTicket.length ? null : showMore}
    </>
  );

  return (
    <div className={ticketListclass['ticket-wrapper']}>
      {selector.renderedTicket.length === 0 ? <NoTicketsAvialable /> : ticketList()}
    </div>
  );
}

export default TicketList;
