/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import transferFilter from './TransferFilter.module.scss';
import * as actions from '../../redux/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TransferFilter() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const filterInputs = selector.transferFilter;
  const { tickets } = selector;

  const allFilter = () => tickets.filter((ticket) => ticket);

  const noTransfer = () => tickets.filter((ticket) => ticket.segments[0].stops.length === 0);

  const oneTransfer = () => tickets.filter((ticket) => ticket.segments[0].stops.length === 1);

  const twoTransfers = () => tickets.filter((ticket) => ticket.segments[0].stops.length === 2);

  const threeTransfers = () => tickets.filter((ticket) => ticket.segments[0].stops.length === 3);

  const filters = [allFilter, noTransfer, oneTransfer, twoTransfers, threeTransfers];

  useEffect(() => {
    let filteredTickets = [];
    if (filterInputs[0]) {
      filteredTickets = tickets;
      dispatch(actions.setFilteredTicketsAction(filteredTickets));
    } else if (!filterInputs.includes(true)) {
      dispatch(actions.setFilteredTicketsAction([]));
    } else {
      filterInputs.slice(1).forEach((filterInput, idx) => {
        if (filterInput) {
          const filterResult = filters[idx + 1]();
          filteredTickets.push(...filterResult);
          dispatch(actions.setFilteredTicketsAction(filteredTickets));
        }
      });
    }
  }, [filterInputs]);

  return (
    <div className={transferFilter['transfer-filter']}>
      <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
      <div className={transferFilter['transfer-filter-item']}>
        <input
          type="checkbox"
          className={transferFilter['filter-checkbox']}
          checked={selector.transferFilter[0]}
          id="1"
          onChange={() => {
            dispatch(actions.allTickets);
            dispatch(actions.noSortTicketsAction);
          }}
        />
        <label htmlFor="1">Все</label>
      </div>
      <div className={transferFilter['transfer-filter-item']}>
        <input
          type="checkbox"
          className={transferFilter['filter-checkbox']}
          checked={selector.transferFilter[1]}
          id="2"
          onChange={() => {
            dispatch(actions.noTransfers);
            dispatch(actions.noSortTicketsAction);
          }}
        />
        <label htmlFor="2">Без пересадок</label>
      </div>
      <div className={transferFilter['transfer-filter-item']}>
        <input
          type="checkbox"
          className={transferFilter['filter-checkbox']}
          id="3"
          checked={selector.transferFilter[2]}
          onChange={() => {
            dispatch(actions.oneTransfer);
            dispatch(actions.noSortTicketsAction);
          }}
        />
        <label htmlFor="3">1 пересадка</label>
      </div>
      <div className={transferFilter['transfer-filter-item']}>
        <input
          type="checkbox"
          className={transferFilter['filter-checkbox']}
          id="4"
          checked={selector.transferFilter[3]}
          onChange={() => {
            dispatch(actions.twoTransfers);
            dispatch(actions.noSortTicketsAction);
          }}
        />
        <label htmlFor="4">2 пересадки</label>
      </div>
      <div className={transferFilter['transfer-filter-item']}>
        <input
          type="checkbox"
          className={transferFilter['filter-checkbox']}
          id="5"
          checked={selector.transferFilter[4]}
          onChange={() => {
            dispatch(actions.threeTransfers);
            dispatch(actions.noSortTicketsAction);
          }}
        />
        <label htmlFor="5">3 пересадки</label>
      </div>
    </div>
  );
}

export default TransferFilter;
