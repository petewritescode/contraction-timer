import { durationToTime } from './duration-to-time.util';

export const formatDuration = (durationInMs = 0) => {
    const time = durationToTime(durationInMs);

    const minutes = time.hours ? 59 : time.minutes;
    const seconds = time.hours ? 59 : time.seconds;
    const suffix = time.hours ? '+' : '';

    const formattedMinutes = String(minutes);
    const formattedSeconds = `0${String(seconds)}`.substr(-2);

    return `${formattedMinutes}:${formattedSeconds}${suffix}`;
};
