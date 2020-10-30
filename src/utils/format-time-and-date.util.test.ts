import { formatTimeAndDate } from './format-time-and-date.util';
import { mockNow } from '../test/utils/test.utils';
import moment from 'moment-mini';

describe('formatTimeAndDate', () => {
    it('returns a string with hours, minutes and am/pm, plus date', () => {
        const mockTimestamp = moment('2020-12-31').valueOf();
        mockNow(mockTimestamp);

        const timestamp1 = moment('2020-01-01T09:24:00').valueOf();
        const timestamp2 = moment('2020-06-23T23:45:00').valueOf();

        expect(formatTimeAndDate(timestamp1)).toEqual('9:24am, 01/01/2020');
        expect(formatTimeAndDate(timestamp2)).toEqual('11:45pm, 23/06/2020');
    });

    it('formats today or yesterday as strings rather than dates', () => {
        const mockTimestamp = moment('2020-12-31').valueOf();
        mockNow(mockTimestamp);

        const timestamp1 = moment('2020-12-31T12:34:56').valueOf();
        const timestamp2 = moment('2020-12-30T12:34:56').valueOf();
        const timestamp3 = moment('2020-12-29T12:34:56').valueOf();

        expect(formatTimeAndDate(timestamp1)).toEqual('12:34pm, today');
        expect(formatTimeAndDate(timestamp2)).toEqual('12:34pm, yesterday');
        expect(formatTimeAndDate(timestamp3)).toEqual('12:34pm, 29/12/2020');
    });
});
