/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import transferFilter from './TransferFilter.module.scss';
import * as actions from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function TransferFilter() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  return (
    <div className={transferFilter['transfer-filter']}>
      <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
      <div className={transferFilter['transfer-filter-container-item']}>
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
          <label htmlFor="1">Выбрать все</label>
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
    </div>
  );
}

export default TransferFilter;
