/* eslint-disable no-nested-ternary */
/* eslint-disable import/order */
import app from './app.module.scss';
import Logo from '../../img/Logo-svg.svg';
import TransferFilter from '../transfer-filter/TransferFilter';
import TicketSort from '../ticket-sort/TicketSort';
import TicketList from '../ticket-list/TicketList';
import Spiner from '../spiner/spiner';
import { useEffect } from 'react';
// import 'antd/dist/antd'; ?????

import { getSearchId, getFirstTickets } from '../services/services';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const searchId = useSelector((state) => state.searchId);
  const onloadingSelector = useSelector((state) => state.onLoad);
  const onErrorSelector = useSelector((state) => state.onError);
  const quantityTicketsSelector = useSelector((state) => state.quantityTickets);

  let ticketsSelector = useSelector((state) => state.tickets);
  ticketsSelector = ticketsSelector.slice(0, quantityTicketsSelector);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (!searchId) return;
    dispatch(getFirstTickets(searchId));
  }, [dispatch, searchId]);

  const errorDiv = () => (
    <div className={app['error-div']}>
      Something gone wrong, <br /> please reload the page.
    </div>
  );

  return (
    <div className={app}>
      <img className={app.logo} src={Logo} alt="logo" />

      <div className={app['app-wrapper']}>
        <TransferFilter />

        <div className={app.main}>
          <TicketSort />
          {onloadingSelector ? (
            <Spiner />
          ) : onErrorSelector ? (
            errorDiv()
          ) : (
            <TicketList renderedTickets={ticketsSelector} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
