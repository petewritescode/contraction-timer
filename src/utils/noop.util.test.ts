import { noop } from './noop.util';

describe('noop util', () => {
    it('returns nothing', () => {
        const result = noop();

        expect(result).toEqual(undefined);
    });
});
