/* eslint-disable import/no-extraneous-dependencies */
import ticketSort from './TicketSort.module.scss';
import {
  sortCheapTicketsAction,
  sortFastTicketsAction,
  sortOptimalTicketsAction,
  backToFiveAction,
} from '../../redux/actions';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

function TicketFilter() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const classCheapest = classNames('', { sortActive: selector.sort === 'CHEAP' });
  const classFastest = classNames('', { sortActive: selector.sort === 'FAST' });
  const classOptional = classNames('', { sortActive: selector.sort === 'OPTIMAL' });

  return (
    <div className={ticketSort['ticket-filter']}>
      <button
        type="button"
        className={ticketSort[`${classCheapest}`]}
        onClick={() => {
          dispatch(backToFiveAction);
          dispatch(sortCheapTicketsAction);
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
        }}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}

export default TicketFilter;
