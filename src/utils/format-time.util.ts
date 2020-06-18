import moment from 'moment-mini';

export const formatTime = (timestamp: number): string => moment(timestamp).format('h:mma');
