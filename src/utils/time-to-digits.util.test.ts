import { timeToDigits } from './time-to-digits.util';

describe('timeToDigits', () => {
    it('converts the passed time to arrays of numbers for each segment', () => {
        const time = {
            hours: 12,
            minutes: 34,
            seconds: 56,
        };

        const result = timeToDigits(time);

        expect(result).toEqual({
            hours: ['1', '2'],
            minutes: ['3', '4'],
            seconds: ['5', '6'],
        });
    });

    it('pads values to at least two characters', () => {
        const time = {
            hours: 1,
            minutes: 2,
            seconds: 3,
        };

        const result = timeToDigits(time);

        expect(result).toEqual({
            hours: ['0', '1'],
            minutes: ['0', '2'],
            seconds: ['0', '3'],
        });
    });

    it('allows hours to expand as much as needed', () => {
        const time = {
            hours: 12345,
            minutes: 0,
            seconds: 0,
        };

        const result = timeToDigits(time);

        expect(result).toEqual({
            hours: ['1', '2', '3', '4', '5'],
            minutes: ['0', '0'],
            seconds: ['0', '0'],
        });
    });

    it('omits hours if they are zero', () => {
        const time = {
            hours: 0,
            minutes: 12,
            seconds: 34,
        };

        const result = timeToDigits(time);

        expect(result).toEqual({
            minutes: ['1', '2'],
            seconds: ['3', '4'],
        });
    });

    it('returns all zeroes for empty minutes or seconds', () => {
        const time = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        const result = timeToDigits(time);

        expect(result).toEqual({
            minutes: ['0', '0'],
            seconds: ['0', '0'],
        });
    });
});
