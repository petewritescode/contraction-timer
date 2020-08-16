import { fontSize } from './font.helpers';
import { Theme } from '../../models/theme.model';

const theme = {
    font: {
        size: {
            s: '0.5rem',
            m: '1rem',
            l: '2rem',
        },
    },
} as Theme;

describe('Font helpers', () => {
    describe('fontSize', () => {
        it('returns the specified font size', () => {
            expect(fontSize('s')({ theme })).toEqual('0.5rem');
            expect(fontSize('m')({ theme })).toEqual('1rem');
            expect(fontSize('l')({ theme })).toEqual('2rem');
        });
    });
});
