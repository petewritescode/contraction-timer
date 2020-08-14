import { color, statusColor } from './theme.helpers';
import { Status } from '../../models/status.model';
import { Theme } from '../../models/theme.model';

const theme = {
    color: {
        contraction: '#ff0000',
        ready: '#00ff00',
        rest: '#0000ff',
    },
} as Theme;

describe('Theme helpers', () => {
    describe('color', () => {
        it('returns the specified color', () => {
            expect(color('contraction')({ theme })).toEqual('#ff0000');
        });
    });

    describe('statusColor', () => {
        it('returns the correct color for the current status', () => {
            expect(statusColor({ theme, status: Status.Contraction })).toEqual('#ff0000');
            expect(statusColor({ theme, status: Status.Ready })).toEqual('#00ff00');
            expect(statusColor({ theme, status: Status.Rest })).toEqual('#0000ff');
        });
    });
});
