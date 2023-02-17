/* eslint-disable import/prefer-default-export */
import { getHours, getMinutes, parseISO, addMinutes } from 'date-fns';

export const getTimeDuration = (segments, segment) => {
  const durationInMinutes = segments[segment].duration;
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  return `${hours}ч ${minutes}м`;
};

export const getDepartureTime = (segments, segment) => {
  const hours = `00${getHours(parseISO(segments[segment].date))}`.slice(-2);
  const minutes = `00${getMinutes(parseISO(segments[segment].date))}`.slice(-2);
  return `${hours}:${minutes}`;
};

export const getArrivalTime = (segments, segment) => {
  const arrivalTime = addMinutes(parseISO(segments[segment].date), segments[segment].duration);
  const hours = `00${getHours(arrivalTime)}`.slice(-2);
  const minutes = `00${getMinutes(arrivalTime)}`.slice(-2);
  return `${hours}:${minutes}`;
};

export const transferInfo = (segments, segment) => {
  if (segments[segment].stops.length === 1) {
    return '1 ПЕРЕСАДКА';
  }
  if (segments[segment].stops.length === 0) {
    return 'НЕТ ПЕРЕСАДОК';
  }
  return `${segments[segment].stops.length} ПЕРЕСАДКИ`;
};

export const getCompanyLogo = (carrier) => new URL(`${carrier}.png`, 'https:pics.avs.io/99/36/');
