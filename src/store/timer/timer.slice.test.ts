import { timerActions, timerReducer, TimerState } from './timer.slice';
import { mockNow } from '../../test/utils/test.utils';

describe('Timer reducer', () => {
  describe('clearComplete action', () => {
    it('clears all completed contractions', () => {
      const state: TimerState = {
        running: false,
        contractions: [
          { start: 1000000000000, duration: 10000 },
          { start: 1000000020000, duration: 10000 },
          { start: 1000000040000, duration: 10000 },
        ],
      };

      const newState: TimerState = {
        running: false,
        contractions: [],
      };

      const action = timerActions.clearComplete();
      const result = timerReducer(state, action);

      expect(result).toEqual(newState);
    });

    it('correctly removes completed contractions with a zero duration', () => {
      const state: TimerState = {
        running: false,
        contractions: [
          { start: 1000000000000, duration: 0 },
        ],
      };

      const newState: TimerState = {
        running: false,
        contractions: [],
      };

      const action = timerActions.clearComplete();
      const result = timerReducer(state, action);

      expect(result).toEqual(newState);
    });

    it('retains the active contraction, if present', () => {
      const state: TimerState = {
        running: false,
        contractions: [
          { start: 1000000000000, duration: 10000 },
          { start: 1000000020000 },
        ],
      };

      const newState: TimerState = {
        running: false,
        contractions: [
          { start: 1000000020000 },
        ],
      };

      const action = timerActions.clearComplete();
      const result = timerReducer(state, action);

      expect(result).toEqual(newState);
    });

    it('stops the timer if there is no active contraction', () => {
      const state: TimerState = {
        running: true,
        contractions: [
          { start: 1000000000000, duration: 10000 },
        ],
      };

      const newState: TimerState = {
        running: false,
        contractions: [],
      };

      const action = timerActions.clearComplete();
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
          { start: 1000000020000, duration: 10000 },
          { start: 1000000040000, duration: 10000 },
        ],
      };

      mockNow(1000000060000);
      const action = timerActions.stop();
      const result = timerReducer(state, action);

      expect(result).toEqual(state);
    });

    it('stops the timer if it is running', () => {
      const state: TimerState = {
        running: true,
        contractions: [],
      };

      const newState: TimerState = {
        running: false,
        contractions: [],
      };

      mockNow(1000000000000);
      const action = timerActions.stop();
      const result = timerReducer(state, action);

      expect(result).toEqual(newState);
    });

    it('completes the final contraction and marks it as last in its group if it is active', () => {
      const state: TimerState = {
        running: true,
        contractions: [
          { start: 1000000000000 },
        ],
      };

      const newState: TimerState = {
        running: false,
        contractions: [
          { start: 1000000000000, duration: 10000, lastInGroup: true },
        ],
      };

      mockNow(1000000010000);
      const action = timerActions.stop();
      const result = timerReducer(state, action);

      expect(result).toEqual(newState);
    });

    it('marks the final contraction as last in its group if it is not active', () => {
      const state: TimerState = {
        running: true,
        contractions: [
          { start: 1000000000000, duration: 10000 },
        ],
      };

      const newState: TimerState = {
        running: false,
        contractions: [
          { start: 1000000000000, duration: 10000, lastInGroup: true },
        ],
      };

      mockNow(1000000020000);
      const action = timerActions.stop();
      const result = timerReducer(state, action);

      expect(result).toEqual(newState);
    });
  });

  describe('toggleContraction action', () => {
    it('starts the timer and creates a new active contraction if the timer is stopped', () => {
      const state: TimerState = {
        running: false,
        contractions: [],
      };

      const newState: TimerState = {
        running: true,
        contractions: [
          { start: 1000000000000 },
        ],
      };

      mockNow(1000000000000);
      const action = timerActions.toggleContraction();
      const result = timerReducer(state, action);

      expect(result).toEqual(newState);
    });

    it('completes the last contraction if it is active', () => {
      const state: TimerState = {
        running: false,
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

      mockNow(1000000010000);
      const action = timerActions.toggleContraction();
      const result = timerReducer(state, action);

      expect(result).toEqual(newState);
    });

    it('starts a new active contraction if the last contraction is inactive', () => {
      const state: TimerState = {
        running: false,
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

      mockNow(1000000020000);
      const action = timerActions.toggleContraction();
      const result = timerReducer(state, action);

      expect(result).toEqual(newState);
    });
  });
});
