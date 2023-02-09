/* eslint-disable react/button-has-type */
import ticketListclass from './TicketList.module.scss';
import TicketItem from '../ticket-item/TicketItem';
import { showMoreAction } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function TicketList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector);

  // const tickets = renderedTickets.map((ticket) => <TicketItem key={uuidv4()} {...ticket} />);
  const tickets = selector.renderedTicket
    .slice(0, selector.quantityTickets)
    .map((ticket) => <TicketItem key={uuidv4()} {...ticket} />);

  const noTicketsAvailable = () => (
    <div className="error-div">
      No flights matching <br /> the specified filters were found
    </div>
  );

  const ticketList = () => (
    <div>
      {tickets}
      <button type="button" className={ticketListclass['show-more-btn']} onClick={() => dispatch(showMoreAction)}>
        Показать еще 5 билетов
      </button>
    </div>
  );

  return (
    <div className={ticketListclass['ticket-wrapper']}>
      {selector.renderedTicket.length === 0 ? noTicketsAvailable() : ticketList()}
    </div>
  );
}

export default TicketList;
