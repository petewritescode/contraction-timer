import { TimerState } from './timer.slice';
import * as timerSelectors from './timer.selectors';

describe('Timer selectors', () => {
    describe('getSlice', () => {
        it('returns the timer slice from the state', () => {
            const state = {
                timer: {} as TimerState,
            };

            const result = timerSelectors.getSlice(state);

            expect(result).toEqual(state.timer);
        });
    });

    describe('getRunning', () => {
        it('returns the running property from the slice', () => {
            const slice = {
                running: true,
            } as TimerState;

            const result = timerSelectors.getRunning.resultFunc(slice);

            expect(result).toEqual(slice.running);
        });
    });
});
