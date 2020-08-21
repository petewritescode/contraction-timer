import moment from 'moment-mini';

export const formatTimeAndDate = (timestamp: number) => moment(timestamp).format('h:mma, DD/MM/YYYY');
