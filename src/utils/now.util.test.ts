import { now } from './now.util';

describe('now util', () => {
    it('returns the current timestamp', () => {
        const dateSpy = jest.spyOn(Date, 'now');

        now();

        expect(dateSpy).toHaveBeenCalledTimes(1);
    });
});
