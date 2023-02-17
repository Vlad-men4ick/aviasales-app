/* eslint-disable consistent-return */
import tickitItem from './TicketItem.module.scss';
import {
  getTimeDuration,
  getDepartureTime,
  getArrivalTime,
  transferInfo,
  getCompanyLogo,
} from '../../utilitys/ticket-item/getDataTicket';
import { generateUniqueID } from 'web-vitals/dist/modules/lib/generateUniqueID';

function TicketItem({ price, carrier, segments }) {
  const transferCities = (segment) =>
    segments[segment].stops.map((city) => (
      <span className={tickitItem['transfer-city']} key={generateUniqueID()}>
        {city}
      </span>
    ));

  return (
    <div className={tickitItem['ticket-item']}>
      <h1 className={tickitItem['ticket-price']}>{price.toLocaleString('ru-RU')} Р</h1>
      <img className={tickitItem['company-logo']} src={`${getCompanyLogo(carrier)}`} alt="logo" />
      <div className={tickitItem['ticket-to']}>
        <div className={tickitItem.way}>
          <h4>
            {segments[0].origin} - {segments[0].destination}
          </h4>
          <span>
            {getDepartureTime(segments, 0)} - {getArrivalTime(segments, 0)}
          </span>
        </div>

        <div className={tickitItem.duration}>
          <h4>В ПУТИ</h4>
          <span>{getTimeDuration(segments, 0)}</span>
        </div>
        <div className={tickitItem.transfers}>
          <h4>{transferInfo(segments, 0)}</h4>
          <span>{transferCities(0)}</span>
        </div>
      </div>

      <div className={tickitItem['ticket-back']}>
        <div className={tickitItem.way}>
          <h4>
            {segments[1].origin} - {segments[1].destination}
          </h4>
          <span>
            {getDepartureTime(segments, 1)} - {getArrivalTime(segments, 1)}
          </span>
        </div>
        <div className={tickitItem.duration}>
          <h4>В ПУТИ</h4>
          <span>{getTimeDuration(segments, 1)}</span>
        </div>
        <div className={tickitItem.transfers}>
          <h4>{transferInfo(segments, 1)}</h4>
          <span>{transferCities(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default TicketItem;
