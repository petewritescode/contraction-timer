import { borderRadius, borderWidth, breakpoint, color, fontSize, pxToRem, spacing, statusColor, transitionDuration } from './theme.helpers';
import { Status } from '../../models/status.model';
import { Theme } from '../../models/theme.model';

const theme = {
    border: {
        width: 'borderWidth',
        radius: {
            s: 'borderRadiusS',
            m: 'borderRadiusM',
            l: 'borderRadiusL',
        },
    },
    breakpoint: {
        s: 'breakpointS',
    },
    color: {
        contraction: 'colorContraction',
        ready: 'colorReady',
        rest: 'colorRest',
    },
    font: {
        size: {
            s: 'fontSizeS',
            m: 'fontSizeM',
            l: 'fontSizeL',
        },
    },
    spacing: {
        s: 'spacingS',
        m: 'spacingM',
        l: 'spacingL',
    },
    transition: {
        duration: {
            m: 'transitionDurationM',
        },
    },
} as Theme;

describe('Theme helpers', () => {
    describe('rem', () => {
        it('converts a pixel value to rems, based on a root font size of 16px', () => {
            expect(pxToRem(32)).toEqual('2rem');
        });
    });

    describe('borderWidth', () => {
        it('returns the border width', () => {
            expect(borderWidth({ theme })).toEqual('borderWidth');
        });
    });

    describe('borderRadius', () => {
        it('returns the specified border radius', () => {
            expect(borderRadius('s')({ theme })).toEqual('borderRadiusS');
            expect(borderRadius('m')({ theme })).toEqual('borderRadiusM');
            expect(borderRadius('l')({ theme })).toEqual('borderRadiusL');
        });
    });

    describe('breakpoint', () => {
        it('returns the passed styles wrapped in a media query', () => {
            const reduceWhitespace = (text: string): string => text.replace(/\s+/g, ' ').trim();

            const expected = `@media (min-width: breakpointS) {
                color: red;
            }`;

            const actual = breakpoint('s', 'color: red;')({ theme }).join('');

            expect(reduceWhitespace(actual)).toEqual(reduceWhitespace(expected));
        });
    });

    describe('color', () => {
        it('returns the specified color', () => {
            expect(color('contraction')({ theme })).toEqual('colorContraction');
            expect(color('ready')({ theme })).toEqual('colorReady');
            expect(color('rest')({ theme })).toEqual('colorRest');
        });
    });

    describe('statusColor', () => {
        it('returns the correct color for the current status', () => {
            expect(statusColor({ theme, status: Status.Contraction })).toEqual('colorContraction');
            expect(statusColor({ theme, status: Status.Ready })).toEqual('colorReady');
            expect(statusColor({ theme, status: Status.Rest })).toEqual('colorRest');
        });
    });

    describe('fontSize', () => {
        it('returns the specified font size', () => {
            expect(fontSize('s')({ theme })).toEqual('fontSizeS');
            expect(fontSize('m')({ theme })).toEqual('fontSizeM');
            expect(fontSize('l')({ theme })).toEqual('fontSizeL');
        });
    });

    describe('spacing', () => {
        it('returns the specified spacing', () => {
            expect(spacing('s')({ theme })).toEqual('spacingS');
            expect(spacing('m')({ theme })).toEqual('spacingM');
            expect(spacing('l')({ theme })).toEqual('spacingL');
        });
    });

    describe('transitionDuration', () => {
        it('returns the specified transition duration', () => {
            expect(transitionDuration('m')({ theme })).toEqual('transitionDurationM');
        });
    });
});
