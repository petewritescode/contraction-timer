import { formatTime } from './format-time.util';
import moment from 'moment-mini';

describe('formatTime', () => {
  it('returns a string with hours, minutes and am/pm', () => {
    const timestamp1 = moment('2020-01-01T09:24:00').valueOf();
    const timestamp2 = moment('2020-01-01T23:45:00').valueOf();

    expect(formatTime(timestamp1)).toEqual('9:24am');
    expect(formatTime(timestamp2)).toEqual('11:45pm');
  });
});
