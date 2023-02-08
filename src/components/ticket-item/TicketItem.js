import tickitItem from './TicketItem.module.scss';
import { getHours, getMinutes, parseISO, addMinutes } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

function TicketItem({ price, carrier, segments }) {
  //   const ticketPrice = (price) => {
  // console.log(price.toString().split("").splice(0, 0, "1", "2"));
  // console.log(["1", "2", "3"].splice(2, 0));
  //   };
  //   console.log(segments);

  const getTimeDuration = (segment) => {
    const durationInMinutes = segments[segment].duration;
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}ч ${minutes}м`;
  };

  const getDepartureTime = (segment) => {
    const hours = `00${getHours(parseISO(segments[segment].date))}`.slice(-2);
    const minutes = `00${getMinutes(parseISO(segments[segment].date))}`.slice(-2);
    return `${hours}:${minutes}`;
  };

  const getArrivalTime = (segment) => {
    const arrivalTime = addMinutes(parseISO(segments[segment].date), segments[segment].duration);
    const hours = `00${getHours(arrivalTime)}`.slice(-2);
    const minutes = `00${getMinutes(arrivalTime)}`.slice(-2);
    return `${hours}:${minutes}`;
  };

  const transferInfo = (segment) => {
    if (segments[segment].stops.length === 1) {
      return '1 ПЕРЕСАДКА';
    }
    if (segments[segment].stops.length === 0) {
      return 'НЕТ ПЕРЕСАДОК';
    }
    return `${segments[segment].stops.length} ПЕРЕСАДКИ`;
  };

  const transferCities = (segment) =>
    segments[segment].stops.map((city) => (
      <span className={tickitItem['transfer-city']} key={uuidv4()}>
        {city}
      </span>
    ));

  return (
    <div className={tickitItem['ticket-item']}>
      <h1 className={tickitItem['ticket-price']}>{price.toLocaleString('ru-RU')} Р</h1>
      <img className={tickitItem['company-logo']} src={`https:pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      <div className={tickitItem['ticket-to']}>
        <div className={tickitItem.way}>
          <h4>
            {segments[0].origin} - {segments[0].destination}
          </h4>
          <span>
            {getDepartureTime(0)} - {getArrivalTime(0)}
          </span>
        </div>

        <div className={tickitItem.duration}>
          <h4>В ПУТИ</h4>
          <span>{getTimeDuration(0)}</span>
        </div>
        <div className={tickitItem.transfers}>
          <h4>{transferInfo(0)}</h4>
          <span>{transferCities(0)}</span>
        </div>
      </div>

      <div className={tickitItem['ticket-back']}>
        <div className={tickitItem.way}>
          <h4>
            {segments[1].origin} - {segments[1].destination}
          </h4>
          <span>
            {getDepartureTime(1)} - {getArrivalTime(1)}
          </span>
        </div>

        <div className={tickitItem.duration}>
          <h4>В ПУТИ</h4>
          <span>{getTimeDuration(1)}</span>
        </div>
        <div className={tickitItem.transfers}>
          <h4>{transferInfo(1)}</h4>
          <span>{transferCities(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default TicketItem;
