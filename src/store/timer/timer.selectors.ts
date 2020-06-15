import { ContractionWithInterval } from '../../models/contraction-with-interval.model';
import { createSelector } from '@reduxjs/toolkit';
import { Status } from '../../models/status.model';
import { TimerState } from './timer.slice';

export const getSlice = (state: { timer: TimerState }) => state.timer;
export const getRunning = createSelector(getSlice, (slice) => slice.running);
export const getContractions = createSelector(getSlice, (slice) => slice.contractions);
export const getLastContraction = createSelector(getContractions, (contractions) => contractions[contractions.length - 1]);

export const getCompletedContractions = createSelector(
    getContractions,
    (contractions) => contractions.filter((contraction) => contraction.duration !== undefined)
);

export const hasCompletedContractions = createSelector(
    getCompletedContractions,
    (completedContractions) => Boolean(completedContractions.length)
);

export const getContractionsWithIntervals = createSelector(
    getContractions,
    (contractions) => contractions.map<ContractionWithInterval>((contraction, index) => {
        const previousContraction = contractions[index - 1];

        const interval = previousContraction && !previousContraction.lastInGroup
            ? contraction.start - previousContraction.start
            : undefined;

        return {
            ...contraction,
            interval,
        };
    })
);

export const getCompletedContractionsWithIntervals = createSelector(
    getContractionsWithIntervals,
    (contractionsWithIntervals) => contractionsWithIntervals.filter((contraction) => contraction.duration !== undefined)
);

export const getAverageDurationSince = (timestamp: number) => createSelector(
    getCompletedContractions,
    (completedContractions) => {
        const completedSince = completedContractions.filter((contraction) => (contraction.start + contraction.duration) > timestamp);

        if (!completedSince.length) {
            return undefined;
        }

        return completedSince.reduce((totalDuration, contraction) => totalDuration + contraction.duration, 0) / completedSince.length;
    }
);

export const getAverageIntervalSince = (timestamp: number) => createSelector(
    getContractionsWithIntervals,
    (contractionsWithIntervals) => {
        const validStartedSince = contractionsWithIntervals
            .filter((contraction) => contraction.interval !== undefined && contraction.start >= timestamp);

        if (!validStartedSince.length) {
            return undefined;
        }

        return validStartedSince.reduce((totalInterval, contraction) => totalInterval + contraction.interval, 0) / validStartedSince.length;
    }
);

export const getStatus = createSelector(
    getRunning,
    getLastContraction,
    (running, lastContraction) => {
        if (!running) {
            return Status.Stopped;
        }

        return lastContraction && lastContraction.duration === undefined ? Status.Contraction : Status.Rest;
    }
);

export const getPhaseStartTime = createSelector(
    getLastContraction,
    (lastContraction) => lastContraction && (lastContraction.start + (lastContraction.duration || 0))
);
