import { formatTimeAndDate } from './format-time-and-date.util';
import moment from 'moment-mini';

describe('formatTimeAndDate', () => {
    it('returns a string with hours, minutes and am/pm, plus date', () => {
        const timestamp1 = moment('2020-01-01T09:24:00').valueOf();
        const timestamp2 = moment('2020-06-23T23:45:00').valueOf();

        expect(formatTimeAndDate(timestamp1)).toEqual('9:24am, 01/01/2020');
        expect(formatTimeAndDate(timestamp2)).toEqual('11:45pm, 23/06/2020');
    });
});
