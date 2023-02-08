import './TicketSort.scss';
import {
  sortCheapTicketsAction,
  sortFastTicketsAction,
  sortOptimalTicketsAction,
  backToFiveAction,
} from '../../redux/actions';
import { useDispatch } from 'react-redux';

function TicketFilter() {
  const dispatch = useDispatch();

  // переписать на classNames и применить css-module к файлу!!!!
  const changeActiveStyle = (idxBtn) => {
    const buttons = document.querySelectorAll('.btn-sort');
    const btnArr = [...buttons];
    btnArr.map((item) => item.classList.remove('sort-active'));
    btnArr[idxBtn].classList.add('sort-active');
  };

  return (
    <div className="ticket-filter">
      <button
        type="button"
        className="btn-sort cheapest"
        onClick={() => {
          changeActiveStyle(0);
          dispatch(backToFiveAction);
          dispatch(sortCheapTicketsAction);
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        className="btn-sort fastest"
        onClick={() => {
          changeActiveStyle(1);
          dispatch(backToFiveAction);
          dispatch(sortFastTicketsAction);
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        type="button"
        className="btn-sort optional"
        onClick={() => {
          changeActiveStyle(2);
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
