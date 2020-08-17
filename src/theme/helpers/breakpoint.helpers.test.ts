import { breakpoint } from './breakpoint.helpers';
import { Theme } from '../../models/theme.model';

const theme = {
    breakpoint: {
        s: '360px',
    },
} as Theme;

describe('breakpoint helpers', () => {
    describe('breakpoint', () => {
        it('returns the passed styles wrapped in a media query', () => {
            const reduceWhitespace = (text: string): string => text.replace(/\s+/g, ' ').trim();

            const expected = `@media (min-width: 360px) {
                color: red;
            }`;

            const actual = breakpoint('s', 'color: red;')({ theme }).join('');

            expect(reduceWhitespace(actual)).toEqual(reduceWhitespace(expected));
        });
    });
});
