/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import './app.css';
import Logo from '../../img/Logo-svg.svg';
import TransferFilter from '../transfer-filter/TransferFilter';
import { getSearchId, getFirstTickets } from '../services/services';
import TicketFilter from '../ticket-filter/TicketFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.searchId);

  useEffect(() => {
    dispatch(getSearchId());
  }, []); // ??? dispatch

  useEffect(() => {
    if (!searchId) return;
    dispatch(getFirstTickets(searchId));
  }, [searchId]); // ??? dispatch

  return (
    <div className="app">
      <img className="logo" src={Logo} alt="logo" />

      <div className="app-wrapper">
        <TransferFilter />

        <div className="main">
          <TicketFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
