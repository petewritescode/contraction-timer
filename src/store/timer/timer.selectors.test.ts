import { Contraction } from '../../models/contraction.model';
import { Status } from '../../models/status.model';
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

    describe('getContractions', () => {
        it('returns the contractions property from the slice', () => {
            const slice = {
                contractions: [],
            } as TimerState;

            const result = timerSelectors.getContractions.resultFunc(slice);

            expect(result).toEqual(slice.contractions);
        });
    });

    describe('getLastContraction', () => {
        it('returns undefined if there are no contractions', () => {
            const contractions: Contraction[] = [];

            const result = timerSelectors.getLastContraction.resultFunc(contractions);

            expect(result).toBe(undefined);
        });

        it('returns the last contraction if one exists', () => {
            const contractions: Contraction[] = [
                { start: 1000000000000, duration: 10000 },
                { start: 1000000020000, duration: 10000 },
                { start: 1000000040000, duration: 10000 },
            ];

            const result = timerSelectors.getLastContraction.resultFunc(contractions);

            expect(result).toEqual(contractions[2]);
        });
    });

    describe('getStatus', () => {
        it('returns Ready if the timer is not running and there are no contractions', () => {
            const result = timerSelectors.getStatus.resultFunc(false, undefined);

            expect(result).toEqual(Status.Ready);
        });

        it('returns Finished if the timer is not running and there are contractions', () => {
            const lastContraction: Contraction = { start: 1000000000000 };

            const result = timerSelectors.getStatus.resultFunc(false, lastContraction);

            expect(result).toEqual(Status.Finished);
        });

        it('returns Contraction if the timer is running and the last contraction is active', () => {
            const lastContraction: Contraction = { start: 1000000000000 };

            const result = timerSelectors.getStatus.resultFunc(true, lastContraction);

            expect(result).toEqual(Status.Contraction);
        });

        it('returns Rest if the timer is running and the last contraction is not active', () => {
            const lastContraction: Contraction = { start: 1000000000000, duration: 10000 };

            const result = timerSelectors.getStatus.resultFunc(true, lastContraction);

            expect(result).toEqual(Status.Rest);
        });
    });

    describe('getPhaseStartTime', () => {
        it('returns undefined if there are no contractions', () => {
            const lastContraction: Contraction = undefined;

            const result = timerSelectors.getPhaseStartTime.resultFunc(lastContraction);

            expect(result).toBe(undefined);
        });

        it('returns the last contraction start time if in the contraction phase', () => {
            const lastContraction: Contraction = { start: 1000000000000 };

            const result = timerSelectors.getPhaseStartTime.resultFunc(lastContraction);

            expect(result).toEqual(1000000000000);
        });

        it('returns the last rest start time if in the rest phase', () => {
            const lastContraction: Contraction = { start: 1000000000000, duration: 10000 };

            const result = timerSelectors.getPhaseStartTime.resultFunc(lastContraction);

            expect(result).toEqual(1000000010000);
        });
    });
});
