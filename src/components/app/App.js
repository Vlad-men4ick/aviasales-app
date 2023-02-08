/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import appClasses from './app.module.scss';
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
  }, []);

  useEffect(() => {
    if (!searchId) return;
    dispatch(getFirstTickets(searchId));
  }, [searchId]);

  return (
    <div className={appClasses.app}>
      <img className={appClasses.logo} src={Logo} alt="logo" />

      <div className={appClasses['app-wrapper']}>
        <TransferFilter />

        <div className={appClasses.main}>
          <TicketFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
