/* eslint-disable react/button-has-type */
import ticketList from './TicketList.module.scss';
import TicketItem from '../ticket-item/TicketItem';
import { showMoreAction } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function TicketList({ renderedTickets }) {
  const dispatch = useDispatch();

  const tickets = renderedTickets.map((ticket) => <TicketItem key={uuidv4()} {...ticket} />);

  return (
    <div className={ticketList['ticket-list']}>
      {tickets}
      <button className={ticketList['show-more-btn']} onClick={() => dispatch(showMoreAction)}>
        Показать еще 5 билетов
      </button>
    </div>
  );
}

export default TicketList;
