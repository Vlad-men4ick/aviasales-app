/* eslint-disable import/no-extraneous-dependencies */
import ticketSort from './TicketSort.module.scss';
import {
  sortCheapTicketsAction,
  sortFastTicketsAction,
  sortOptimalTicketsAction,
  backToFiveAction,
  setSortedTicketsAction,
} from '../../redux/actions';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

function TicketFilter() {
  const dispatch = useDispatch();
  const ticketsSelector = useSelector((state) => state.renderedTicket);
  const selector = useSelector((state) => state);

  const classCheapest = classNames('', { sortActive: selector.sort === 'CHEAP' });
  const classFastest = classNames('', { sortActive: selector.sort === 'FAST' });
  const classOptional = classNames('', { sortActive: selector.sort === 'OPTIMAL' });

  const cheapSort = () => {
    const cheapTickets = ticketsSelector.sort((prev, next) => prev.price - next.price);
    dispatch(setSortedTicketsAction(cheapTickets));
  };

  const fastSort = () => {
    const fastTickets = ticketsSelector.sort((prev, next) => prev.segments[0].duration - next.segments[0].duration);
    dispatch(setSortedTicketsAction(fastTickets));
  };

  const optimalSort = () => {
    const optimalTickets = ticketsSelector.sort((prev, next) => prev.carrier.localeCompare(next.carrier));
    dispatch(setSortedTicketsAction(optimalTickets));
  };

  return (
    <div className={ticketSort['ticket-filter']}>
      <button
        type="button"
        className={ticketSort[`${classCheapest}`]}
        onClick={() => {
          dispatch(backToFiveAction);
          dispatch(sortCheapTicketsAction);
          cheapSort();
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        className={ticketSort[`${classFastest}`]}
        onClick={() => {
          dispatch(backToFiveAction);
          dispatch(sortFastTicketsAction);
          fastSort();
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        type="button"
        className={ticketSort[`${classOptional}`]}
        onClick={() => {
          dispatch(backToFiveAction);
          dispatch(sortOptimalTicketsAction);
          optimalSort();
        }}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}

export default TicketFilter;
