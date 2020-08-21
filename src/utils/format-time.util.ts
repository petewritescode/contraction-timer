import moment from 'moment-mini';

export const formatTime = (timestamp: number) => moment(timestamp).format('h:mma');
