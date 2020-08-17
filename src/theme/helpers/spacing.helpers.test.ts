import { spacing } from './spacing.helpers';
import { Theme } from '../../models/theme.model';

const theme = {
    spacing: {
        s: '0.25rem',
        m: '0.5rem',
        l: '1rem',
    },
} as Theme;

describe('Spacing helpers', () => {
    describe('spacing', () => {
        it('returns the specified spacing', () => {
            expect(spacing('s')({ theme })).toEqual('0.25rem');
            expect(spacing('m')({ theme })).toEqual('0.5rem');
            expect(spacing('l')({ theme })).toEqual('1rem');
        });
    });
});
