import { Digits } from '../models/digits.model';
import { Time } from '../models/time.models';

const MIN_SEGMENT_LENGTH = 2;

const buildDigits = (segment: number): string[] => {
    const digits = String(segment).split('');
    const length = Math.max(MIN_SEGMENT_LENGTH, digits.length);
    const padDigits = Array.from({ length: length - digits.length }).map(() => '0');

    return [
        ...padDigits,
        ...digits,
    ];
};

export const timeToDigits = (time: Time): Digits => ({
    ...(time.hours ? { hours: buildDigits(time.hours) } : {}),
    minutes: buildDigits(time.minutes),
    seconds: buildDigits(time.seconds),
});
