import { createSelector } from '@reduxjs/toolkit';
import { Status } from '../../models/status.model';
import { TimerState } from './timer.slice';

export const getSlice = (state: { timer: TimerState }) => state.timer;
export const getRunning = createSelector(getSlice, (slice) => slice.running);
export const getContractions = createSelector(getSlice, (slice) => slice.contractions);
export const getLastContraction = createSelector(getContractions, (contractions) => contractions[contractions.length - 1]);

export const getStatus = createSelector(
    getRunning,
    getLastContraction,
    (running, lastContraction) => {
        if (running) {
            return lastContraction.duration ? Status.Rest : Status.Contraction;
        }

        return lastContraction ? Status.Finished : Status.Ready;
    }
);
