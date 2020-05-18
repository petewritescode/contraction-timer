import { Digits } from '../models/digits.model';
import { durationToTime } from './duration-to-time.util';
import { timeToDigits } from './time-to-digits.util';

export const durationToDigits = (durationInMs: number): Digits => timeToDigits(durationToTime(durationInMs));
