import moment from 'moment-mini';

export const formatTimeAndDate = (timestamp: number): string => moment(timestamp).format('h:mma, DD/MM/YYYY');
