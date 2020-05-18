import { durationToDigits } from './duration-to-digits.util';
import * as durationToTimeUtil from './duration-to-time.util';
import * as timeToDigitsUtil from './time-to-digits.util';

describe('durationToDigits', () => {
    it('integrates the durationToTime and timeToDigits utility functions', () => {
        const durationToTimeSpy = jest.spyOn(durationToTimeUtil, 'durationToTime');
        const timeToDigitsSpy = jest.spyOn(timeToDigitsUtil, 'timeToDigits');

        durationToDigits(45296000);

        expect(durationToTimeSpy).toHaveBeenCalledTimes(1);
        expect(durationToTimeSpy).toHaveBeenCalledWith(45296000);
        expect(timeToDigitsSpy).toHaveBeenCalledTimes(1);
        expect(timeToDigitsSpy).toHaveBeenCalledWith({
            hours: 12,
            minutes: 34,
            seconds: 56,
        });
    });

    it('converts a millisecond duration to arrays of numbers for each segment', () => {
        const result = durationToDigits(45296000);

        expect(result).toEqual({
            hours: ['1', '2'],
            minutes: ['3', '4'],
            seconds: ['5', '6'],
        });
    });
});
