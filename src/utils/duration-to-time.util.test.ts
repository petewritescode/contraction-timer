import { durationToTime } from './duration-to-time.util';

describe('durationToTime', () => {
    it('parses a millisecond time duration into hours, minutes and seconds', () => {
        const result = durationToTime(45296000);

        expect(result).toEqual({
            hours: 12,
            minutes: 34,
            seconds: 56,
        });
    });

    it('handles times that span multiple days', () => {
        const result = durationToTime(362096000);

        expect(result).toEqual({
            hours: 100,
            minutes: 34,
            seconds: 56,
        });
    });

    it('returns zero for all parts without a value', () => {
        const result = durationToTime(0);

        expect(result).toEqual({
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
    });

    it('does not return more than 60 seconds', () => {
        const result = durationToTime(60000);

        expect(result).toEqual({
            hours: 0,
            minutes: 1,
            seconds: 0,
        });
    });

    it('does not return more than 60 minutes', () => {
        const result = durationToTime(3600000);

        expect(result).toEqual({
            hours: 1,
            minutes: 0,
            seconds: 0,
        });
    });

    it('discards any milliseconds less than a complete second', () => {
        const result = durationToTime(999);

        expect(result).toEqual({
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
    });
});
