import { createSelector } from '@reduxjs/toolkit';
import { TimerState } from './timer.slice';

export const getSlice = (state: { timer: TimerState }) => state.timer;
export const getRunning = createSelector(getSlice, (slice) => slice.running);
