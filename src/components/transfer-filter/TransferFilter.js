/* eslint-disable import/no-extraneous-dependencies */
import './TransferFilter.css';
import * as actions from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function TransferFilter() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  // console.log(selector);

  return (
    <div className="transfer-filter">
      <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          checked={selector.transferFilter[0]}
          onChange={() => {
            dispatch(actions.allTickets);
          }}
        />
        <span>Все</span>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          checked={selector.transferFilter[1]}
          onChange={() => {
            dispatch(actions.noTransfers);
          }}
        />
        <span>Без пересадок</span>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          checked={selector.transferFilter[2]}
          onChange={() => {
            dispatch(actions.oneTransfer);
          }}
        />
        <span>1 пересадка</span>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          checked={selector.transferFilter[3]}
          onChange={() => {
            dispatch(actions.twoTransfers);
          }}
        />
        <span>2 пересадки</span>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          checked={selector.transferFilter[4]}
          onChange={() => {
            dispatch(actions.threeTransfers);
          }}
        />
        <span>3 пересадки</span>
      </div>
    </div>
  );
}

export default TransferFilter;
