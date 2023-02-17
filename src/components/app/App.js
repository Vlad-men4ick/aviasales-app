import app from './app.module.scss';
import Logo from '../../img/Logo-svg.svg';
import TransferFilter from '../transfer-filter/TransferFilter';
import TicketSort from '../ticket-sort/TicketSort';
import TicketList from '../ticket-list/TicketList';
import ErrorBlock from '../error/ErrorBlock';
import { getSearchId, getTickets } from '../../services/services';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const statusLoading = useSelector((state) => state.status);
  const [searchID, getSearchID] = useState();

  useEffect(() => {
    getSearchId().then((res) => getSearchID(res.searchId));
  }, []);

  useEffect(() => {
    if (!searchID) return;
    dispatch(getTickets(searchID));
  }, [dispatch, searchID]);

  return (
    <div className={app.app}>
      <img className={app.logo} src={Logo} alt="logo" />

      <div className={app['app-wrapper']}>
        <TransferFilter />
        <div className={app.main}>
          <TicketSort />
          {statusLoading === 'ERROR' ? <ErrorBlock /> : <TicketList />}
        </div>
      </div>
    </div>
  );
}

export default App;
