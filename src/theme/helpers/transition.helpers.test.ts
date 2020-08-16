import { Theme } from '../../models/theme.model';
import { transitionDuration } from './transition.helpers';

const theme = {
    transition: {
        duration: '250ms',
    },
} as Theme;

describe('Transition helpers', () => {
    describe('transitionDuration', () => {
        it('returns the transition duration', () => {
            expect(transitionDuration({ theme })).toEqual('250ms');
        });
    });
});
