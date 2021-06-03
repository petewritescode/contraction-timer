import { mockNow } from '../test/utils/test.utils';
import { now } from './now.util';

describe('now util', () => {
  it('returns the current timestamp', () => {
    mockNow(1000000000000);

    const result = now();

    expect(result).toEqual(1000000000000);
  });
});
