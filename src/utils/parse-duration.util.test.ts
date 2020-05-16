import { parseDuration } from './parse-duration.util';

describe('parseDuration', () => {
    it('parses a millisecond time duration into hours, minutes and seconds', () => {
        const result = parseDuration(45296000);

        expect(result).toEqual({
            hours: 12,
            minutes: 34,
            seconds: 56,
        });
    });

    it('handles times that span multiple days', () => {
        const result = parseDuration(362096000);

        expect(result).toEqual({
            hours: 100,
            minutes: 34,
            seconds: 56,
        });
    });

    it('returns zero for all parts without a value', () => {
        const result = parseDuration(0);

        expect(result).toEqual({
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
    });

    it('does not return more than 60 seconds', () => {
        const result = parseDuration(60000);

        expect(result).toEqual({
            hours: 0,
            minutes: 1,
            seconds: 0,
        });
    });

    it('does not return more than 60 minutes', () => {
        const result = parseDuration(3600000);

        expect(result).toEqual({
            hours: 1,
            minutes: 0,
            seconds: 0,
        });
    });

    it('discards any milliseconds less than a complete second', () => {
        const result = parseDuration(999);

        expect(result).toEqual({
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
    });
});
