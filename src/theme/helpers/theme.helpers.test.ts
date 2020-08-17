import { borderRadius, borderWidth, breakpoint, color, fontSize, spacing, statusColor, transitionDuration } from './theme.helpers';
import { Status } from '../../models/status.model';
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
    breakpoint: {
        s: '360px',
    },
    color: {
        contraction: '#ff0000',
        ready: '#00ff00',
        rest: '#0000ff',
    },
    font: {
        size: {
            s: '0.5rem',
            m: '1rem',
            l: '2rem',
        },
    },
    spacing: {
        s: '0.25rem',
        m: '0.5rem',
        l: '1rem',
    },
    transition: {
        duration: {
            m: '250ms',
        },
    },
} as Theme;

describe('Theme helpers', () => {
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

    describe('color', () => {
        it('returns the specified color', () => {
            expect(color('contraction')({ theme })).toEqual('#ff0000');
            expect(color('ready')({ theme })).toEqual('#00ff00');
            expect(color('rest')({ theme })).toEqual('#0000ff');
        });
    });

    describe('statusColor', () => {
        it('returns the correct color for the current status', () => {
            expect(statusColor({ theme, status: Status.Contraction })).toEqual('#ff0000');
            expect(statusColor({ theme, status: Status.Ready })).toEqual('#00ff00');
            expect(statusColor({ theme, status: Status.Rest })).toEqual('#0000ff');
        });
    });

    describe('fontSize', () => {
        it('returns the specified font size', () => {
            expect(fontSize('s')({ theme })).toEqual('0.5rem');
            expect(fontSize('m')({ theme })).toEqual('1rem');
            expect(fontSize('l')({ theme })).toEqual('2rem');
        });
    });

    describe('spacing', () => {
        it('returns the specified spacing', () => {
            expect(spacing('s')({ theme })).toEqual('0.25rem');
            expect(spacing('m')({ theme })).toEqual('0.5rem');
            expect(spacing('l')({ theme })).toEqual('1rem');
        });
    });

    describe('transitionDuration', () => {
        it('returns the specified transition duration', () => {
            expect(transitionDuration('m')({ theme })).toEqual('250ms');
        });
    });
});
