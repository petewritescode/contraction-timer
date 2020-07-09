import { Contraction } from '../../models/contraction.model';
import { ContractionWithInterval } from '../../models/contraction-with-interval.model';
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
            const state = {
                timer: {
                    running: true,
                } as TimerState,
            };

            const result = timerSelectors.getRunning(state);

            expect(result).toEqual(state.timer.running);
        });
    });

    describe('getContractions', () => {
        it('returns the contractions property from the slice', () => {
            const state = {
                timer: {
                    contractions: [],
                } as TimerState,
            };

            const result = timerSelectors.getContractions(state);

            expect(result).toEqual(state.timer.contractions);
        });
    });

    describe('getLastContraction', () => {
        it('returns undefined if there are no contractions', () => {
            const state = {
                timer: {
                    contractions: [],
                } as TimerState,
            };

            const result = timerSelectors.getLastContraction(state);

            expect(result).toBe(undefined);
        });

        it('returns the last contraction if one exists', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 10000 },
                        { start: 1000000020000, duration: 10000 },
                        { start: 1000000040000, duration: 10000 },
                    ],
                } as TimerState,
            };

            const result = timerSelectors.getLastContraction(state);

            expect(result).toEqual(state.timer.contractions[2]);
        });
    });

    describe('getCompletedContractions', () => {
        it('returns all completed contractions', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 10000 },
                        { start: 1000000020000, duration: 10000 },
                        { start: 1000000040000 },
                    ],
                } as TimerState,
            };

            const expected: Contraction[] = [
                { start: 1000000000000, duration: 10000 },
                { start: 1000000020000, duration: 10000 },
            ];

            const result = timerSelectors.getCompletedContractions(state);

            expect(result).toEqual(expected);
        });

        it('returns an empty array if there are no completed contractions', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000 },
                    ],
                } as TimerState,
            };

            const result = timerSelectors.getCompletedContractions(state);

            expect(result).toEqual([]);
        });

        it('returns an empty array if there are no contractions', () => {
            const state = {
                timer: {
                    contractions: [],
                } as TimerState,
            };

            const result = timerSelectors.getCompletedContractions(state);

            expect(result).toEqual([]);
        });
    });

    describe('hasCompletedContractions', () => {
        it('returns true if there are completed contractions', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 10000 },
                    ],
                } as TimerState,
            };

            const result = timerSelectors.hasCompletedContractions(state);

            expect(result).toEqual(true);
        });

        it('returns false if there are no completed contractions', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000 },
                    ],
                } as TimerState,
            };

            const result = timerSelectors.hasCompletedContractions(state);

            expect(result).toEqual(false);
        });

        it('returns false if there are no contractions', () => {
            const state = {
                timer: {
                    contractions: [],
                } as TimerState,
            };

            const result = timerSelectors.hasCompletedContractions(state);

            expect(result).toEqual(false);
        });
    });

    describe('getContractionsWithIntervals', () => {
        it('returns an array of contractions with interval values', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 1 },
                        { start: 1000000010000, duration: 1 },
                        { start: 1000000040000, duration: 1 },
                    ],
                } as TimerState,
            };

            const expected: ContractionWithInterval[] = [
                { start: 1000000000000, duration: 1 },
                { start: 1000000010000, duration: 1, interval: 10000 },
                { start: 1000000040000, duration: 1, interval: 30000 },
            ];

            const result = timerSelectors.getContractionsWithIntervals(state);

            expect(result).toEqual(expected);
        });

        it('sets interval to undefined if the contraction is first in its group', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 1 },
                        { start: 1000000010000, duration: 1, lastInGroup: true },
                        { start: 1000000040000, duration: 1 },
                        { start: 1000000060000, duration: 1 },
                    ],
                } as TimerState,
            };

            const expected: ContractionWithInterval[] = [
                { start: 1000000000000, duration: 1 },
                { start: 1000000010000, duration: 1, interval: 10000, lastInGroup: true },
                { start: 1000000040000, duration: 1 },
                { start: 1000000060000, duration: 1, interval: 20000 },
            ];

            const result = timerSelectors.getContractionsWithIntervals(state);

            expect(result).toEqual(expected);
        });
    });

    describe('getCompletedContractionsWithIntervals', () => {
        it('returns an array of completed contractions with interval values', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 1 },
                        { start: 1000000010000, duration: 1 },
                        { start: 1000000040000 },
                    ],
                } as TimerState,
            };

            const expected: ContractionWithInterval[] = [
                { start: 1000000000000, duration: 1 },
                { start: 1000000010000, duration: 1, interval: 10000 },
            ];

            const result = timerSelectors.getCompletedContractionsWithIntervals(state);

            expect(result).toEqual(expected);
        });
    });

    describe('getReversedCompletedContractionsWithIntervals', () => {
        it('returns an array of completed contractions with interval values', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 1 },
                        { start: 1000000010000, duration: 1 },
                        { start: 1000000040000 },
                    ],
                } as TimerState,
            };

            const expected: ContractionWithInterval[] = [
                { start: 1000000010000, duration: 1, interval: 10000 },
                { start: 1000000000000, duration: 1 },
            ];

            const result = timerSelectors.getReversedCompletedContractionsWithIntervals(state);

            expect(result).toEqual(expected);
        });
    });

    describe('getAverageDurationSince', () => {
        it('returns the average duration of all contractions completed after the specified timestamp', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 19000 },
                        { start: 1000000100000, duration: 24000 },
                        { start: 1000000200000, duration: 20000 },
                        { start: 1000000300000 },
                    ],
                } as TimerState,
            };

            const result1 = timerSelectors.getAverageDurationSince(1000000018999)(state);
            const result2 = timerSelectors.getAverageDurationSince(1000000019000)(state);

            expect(result1).toEqual(21000);
            expect(result2).toEqual(22000);
        });

        it('returns undefined if there are no completed contractions after the specified timestamp', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 19000 },
                        { start: 1000000100000, duration: 24000 },
                        { start: 1000000200000, duration: 20000 },
                    ],
                } as TimerState,
            };

            const result = timerSelectors.getAverageDurationSince(1000000300000)(state);

            expect(result).toBe(undefined);
        });
    });

    describe('getAverageIntervalSince', () => {
        it('returns the average interval of all contractions started on or after the specified timestamp', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 1 },
                        { start: 1000000100000, duration: 1 },
                        { start: 1000000160000, duration: 1 },
                        { start: 1000000240000 },
                    ],
                } as TimerState,
            };

            const result1 = timerSelectors.getAverageIntervalSince(1000000000000)(state);
            const result2 = timerSelectors.getAverageIntervalSince(1000000100000)(state);
            const result3 = timerSelectors.getAverageIntervalSince(1000000100001)(state);

            expect(result1).toEqual(80000);
            expect(result2).toEqual(80000);
            expect(result3).toEqual(70000);
        });

        it('does not include breaks between groups', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 1 },
                        { start: 1000000100000, duration: 1, lastInGroup: true },
                        { start: 1000000160000, duration: 1 },
                        { start: 1000000240000 },
                    ],
                } as TimerState,
            };

            const result = timerSelectors.getAverageIntervalSince(1000000000000)(state);

            expect(result).toEqual(90000);
        });

        it('returns undefined if there are no valid intervals after the specified timestamp', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 1 },
                    ],
                } as TimerState,
            };

            const result = timerSelectors.getAverageIntervalSince(1000000000000)(state);

            expect(result).toBe(undefined);
        });
    });

    describe('getStatus', () => {
        it('returns Stopped if the timer is not running', () => {
            const state = {
                timer: {
                    running: false,
                    contractions: [],
                } as TimerState,
            };

            const result = timerSelectors.getStatus(state);

            expect(result).toEqual(Status.Stopped);
        });

        it('returns Rest if the timer is running and there are no contractions', () => {
            const state = {
                timer: {
                    running: true,
                    contractions: [],
                } as TimerState,
            };

            const result = timerSelectors.getStatus(state);

            expect(result).toEqual(Status.Rest);
        });

        it('returns Rest if the timer is running and the last contraction is not active', () => {
            const state = {
                timer: {
                    running: true,
                    contractions: [
                        { start: 1000000000000, duration: 10000 },
                    ],
                },
            };

            const result = timerSelectors.getStatus(state);

            expect(result).toEqual(Status.Rest);
        });

        it('returns Contraction if the timer is running and the last contraction is active', () => {
            const state = {
                timer: {
                    running: true,
                    contractions: [
                        { start: 1000000000000 },
                    ],
                },
            };

            const result = timerSelectors.getStatus(state);

            expect(result).toEqual(Status.Contraction);
        });
    });

    describe('getPhaseStartTime', () => {
        it('returns undefined if there are no contractions', () => {
            const state = {
                timer: {
                    contractions: [],
                } as TimerState,
            };

            const result = timerSelectors.getPhaseStartTime(state);

            expect(result).toBe(undefined);
        });

        it('returns the last contraction start time if in the contraction phase', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000 },
                    ],
                } as TimerState,
            };

            const result = timerSelectors.getPhaseStartTime(state);

            expect(result).toEqual(1000000000000);
        });

        it('returns the last rest start time if in the rest phase', () => {
            const state = {
                timer: {
                    contractions: [
                        { start: 1000000000000, duration: 10000 },
                    ],
                } as TimerState,
            };

            const result = timerSelectors.getPhaseStartTime(state);

            expect(result).toEqual(1000000010000);
        });
    });
});
