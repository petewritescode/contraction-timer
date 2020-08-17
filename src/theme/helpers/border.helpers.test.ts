import { borderRadius, borderWidth } from './border.helpers';
import { Theme } from '../../models/theme.model';

const theme = {
    border: {
        width: '0.25rem',
        radius: {
            s: '0.25rem',
            m: '0.5rem',
            l: '0.75rem',
        },
    },
} as Theme;

describe('border helpers', () => {
    describe('borderWidth', () => {
        it('returns the border width', () => {
            expect(borderWidth({ theme })).toEqual('0.25rem');
        });
    });
    describe('borderRadius', () => {
        it('returns the specified border radius', () => {
            expect(borderRadius('s')({ theme })).toEqual('0.25rem');
            expect(borderRadius('m')({ theme })).toEqual('0.5rem');
            expect(borderRadius('l')({ theme })).toEqual('0.75rem');
        });
    });
});
