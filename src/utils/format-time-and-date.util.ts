import moment from 'moment-mini';

const getDateFormat = (date: moment.Moment) => {
  const today = moment().startOf('day');
  const yesterday = today.clone().subtract(1, 'day');

  if (date.isSameOrAfter(today)) {
    return '[today]';
  }

  if (date.isSameOrAfter(yesterday)) {
    return '[yesterday]';
  }

  return 'DD/MM/YYYY';
};

export const formatTimeAndDate = (timestamp: number) => {
  const date = moment(timestamp);
  const dateFormat = getDateFormat(date);

  return moment(timestamp).format(`h:mma, ${dateFormat}`);
};
