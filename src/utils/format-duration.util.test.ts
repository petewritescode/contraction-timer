import { formatDuration } from './format-duration.util';

describe('formatDuration', () => {
  it('formats the duration into minutes and seconds, with no leading zero on the minutes', () => {
    expect(formatDuration(0)).toEqual('0:00');
    expect(formatDuration(1000)).toEqual('0:01');
    expect(formatDuration(59000)).toEqual('0:59');
    expect(formatDuration(60000)).toEqual('1:00');
    expect(formatDuration(599000)).toEqual('9:59');
    expect(formatDuration(600000)).toEqual('10:00');
    expect(formatDuration(3599000)).toEqual('59:59');
  });

  it('caps the value at 59:59, with a trailing plus symbol', () => {
    expect(formatDuration(3600000)).toEqual('59:59+');
    expect(formatDuration(6000000)).toEqual('59:59+');
  });

  it('includes only completed seconds, discarding any remaining milliseconds', () => {
    expect(formatDuration(999)).toEqual('0:00');
  });

  it('treats an undefined value as zero', () => {
    expect(formatDuration()).toEqual('0:00');
  });
});
