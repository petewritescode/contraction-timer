import { MS_IN_A_MINUTE, MS_IN_A_SECOND, MS_IN_AN_HOUR } from '../constants/time.constants';
import { Time } from '../models/time.model';

export const durationToTime = (durationInMs: number): Time => {
    let msRemaining = durationInMs;

    const hours = Math.floor(msRemaining / MS_IN_AN_HOUR);
    msRemaining -= hours * MS_IN_AN_HOUR;

    const minutes = Math.floor(msRemaining / MS_IN_A_MINUTE);
    msRemaining -= (minutes * MS_IN_A_MINUTE);

    const seconds = Math.floor(msRemaining / MS_IN_A_SECOND);

    return {
        hours,
        minutes,
        seconds,
    };
};
