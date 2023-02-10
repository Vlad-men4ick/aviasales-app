/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/named */
/* eslint-disable no-nested-ternary */
import app from './app.module.scss';
import Logo from '../../img/Logo-svg.svg';
import TransferFilter from '../transfer-filter/TransferFilter';
import TicketSort from '../ticket-sort/TicketSort';
import TicketList from '../ticket-list/TicketList';
import Spiner from '../spiner/spiner';
import ErrorBlock from '../error/ErrorBlock';
import { getSearchId, getTickets } from '../../services/services';
import { initRenderedTicketsAction, sortedTicketsAction, filteredTicketsAction } from '../../redux/actions';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const areAllTicketsLoaded = useSelector((state) => state.allTicketsLoaded);
  const searchId = useSelector((state) => state.searchId);
  const onloadingSelector = useSelector((state) => state.onLoad);
  const onErrorSelector = useSelector((state) => state.onError);
  const allTicketsSelector = useSelector((state) => state.tickets);
  const transferFilterInputsSelector = useSelector((state) => state.transferFilter);
  const sortTypeSelector = useSelector((state) => state.sort);
  const renderedTicketsSelector = useSelector((state) => state.renderedTicket);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (!searchId) return;
    dispatch(getTickets(searchId));
  }, [dispatch, searchId]);

  useEffect(() => {
    dispatch(initRenderedTicketsAction(allTicketsSelector));
    dispatch(filteredTicketsAction(allTicketsSelector, transferFilterInputsSelector));
    dispatch(sortedTicketsAction(renderedTicketsSelector, sortTypeSelector));
  }, [allTicketsSelector, transferFilterInputsSelector, sortTypeSelector]);

  return (
    <div className={app.app}>
      <img className={app.logo} src={Logo} alt="logo" />

      <div className={app['app-wrapper']}>
        <TransferFilter />
        <div className={app.main}>
          <TicketSort />
          {areAllTicketsLoaded ? null : <Spiner />}
          {onloadingSelector ? null : onErrorSelector ? <ErrorBlock /> : <TicketList />}
        </div>
      </div>
    </div>
  );
}

export default App;
