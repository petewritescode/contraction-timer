import { now } from './now.util';

describe('now util', () => {
    it('calls Date.now()', () => {
        const dateSpy = jest.spyOn(Date, 'now');

        now();

        expect(dateSpy).toHaveBeenCalledTimes(1);
    });

    it('returns the current timestamp', () => {
        jest.spyOn(Date, 'now').mockReturnValue(1000000000000);

        const result = now();

        expect(result).toEqual(1000000000000);
    });
});
