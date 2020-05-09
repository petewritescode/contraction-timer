import { timerActions, timerReducer, TimerState } from './timer.slice';

const createDateSpy = (timestamp: number) => jest.spyOn(Date, 'now').mockReturnValue(timestamp);

describe('Timer reducer', () => {
    describe('mark action', () => {
        it('starts the timer and resets the contractions array to a single active contraction if the timer is stopped', () => {
            const state: TimerState = {
                running: false,
                contractions: [
                    { start: 1000000000000, duration: 10000 },
                    { start: 1000000020000, duration: 10000 },
                    { start: 1000000040000, duration: 10000 },
                ],
            };

            const newState: TimerState = {
                running: true,
                contractions: [
                    { start: 1000000060000 },
                ],
            };

            createDateSpy(1000000060000);
            const action = timerActions.mark();
            const result = timerReducer(state, action);

            expect(result).toEqual(newState);
        });

        it('completes any active contraction if the timer is running', () => {
            const state: TimerState = {
                running: true,
                contractions: [
                    { start: 1000000000000 },
                ],
            };

            const newState: TimerState = {
                running: true,
                contractions: [
                    { start: 1000000000000, duration: 10000 },
                ],
            };

            createDateSpy(1000000010000);
            const action = timerActions.mark();
            const result = timerReducer(state, action);

            expect(result).toEqual(newState);
        });

        it('adds a new contraction if the timer is running and there are no active contractions', () => {
            const state: TimerState = {
                running: true,
                contractions: [
                    { start: 1000000000000, duration: 10000 },
                ],
            };

            const newState: TimerState = {
                running: true,
                contractions: [
                    { start: 1000000000000, duration: 10000 },
                    { start: 1000000020000 },
                ],
            };

            createDateSpy(1000000020000);
            const action = timerActions.mark();
            const result = timerReducer(state, action);

            expect(result).toEqual(newState);
        });
    });

    describe('reset action', () => {
        it('does nothing if the timer is running', () => {
            const state: TimerState = {
                running: true,
                contractions: [
                    { start: 1000000000000 },
                ],
            };

            const action = timerActions.reset();
            const result = timerReducer(state, action);

            expect(result).toEqual(state);
        });

        it('empties the contractions array if the timer is stopped', () => {
            const state: TimerState = {
                running: false,
                contractions: [
                    { start: 1000000000000 },
                ],
            };

            const newState: TimerState = {
                running: false,
                contractions: [],
            };

            const action = timerActions.reset();
            const result = timerReducer(state, action);

            expect(result).toEqual(newState);
        });
    });

    describe('stop action', () => {
        it('does nothing if the timer is stopped', () => {
            const state: TimerState = {
                running: false,
                contractions: [
                    { start: 1000000000000, duration: 10000 },
                ],
            };

            const action = timerActions.stop();
            const result = timerReducer(state, action);

            expect(result).toEqual(state);
        });

        it('stops the timer if it is running', () => {
            const state: TimerState = {
                running: true,
                contractions: [
                    { start: 1000000000000, duration: 10000 },
                ],
            };

            const newState = {
                running: false,
                contractions: [
                    { start: 1000000000000, duration: 10000 },
                ],
            };

            const action = timerActions.stop();
            const result = timerReducer(state, action);

            expect(result).toEqual(newState);
        });

        it('completes the last contraction if it is active', () => {
            const state: TimerState = {
                running: true,
                contractions: [
                    { start: 1000000000000 },
                ],
            };

            const newState = {
                running: false,
                contractions: [
                    { start: 1000000000000, duration: 10000 },
                ],
            };

            createDateSpy(1000000010000);
            const action = timerActions.stop();
            const result = timerReducer(state, action);

            expect(result).toEqual(newState);
        });
    });
});
