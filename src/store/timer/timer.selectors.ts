import { ContractionWithInterval } from '../../models/contraction-with-interval.model';
import { createSelector } from '@reduxjs/toolkit';
import { Status } from '../../models/status.model';
import { TimerState } from './timer.slice';

const getSlice = (state: { timer: TimerState }) => state.timer;
const getRunning = createSelector(getSlice, (slice) => slice.running);
const getContractions = createSelector(getSlice, (slice) => slice.contractions);
const getLastContraction = createSelector(getContractions, (contractions) => contractions[contractions.length - 1]);

const getCompletedContractions = createSelector(
    getContractions,
    (contractions) => contractions.filter((contraction) => contraction.duration)
);

const hasCompletedContractions = createSelector(
    getCompletedContractions,
    (completedContractions) => Boolean(completedContractions.length)
);

const getContractionsWithIntervals = createSelector(
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

const getCompletedContractionsWithIntervals = createSelector(
    getContractionsWithIntervals,
    (contractionsWithIntervals) => contractionsWithIntervals.filter((contraction) => contraction.duration)
);

const getReversedCompletedContractionsWithIntervals = createSelector(
    getCompletedContractionsWithIntervals,
    (completedContractionsWithIntervals) => [...completedContractionsWithIntervals].reverse()
);

const getAverageDurationSince = (timestamp: number) => createSelector(
    getCompletedContractions,
    (completedContractions) => {
        const completedSince = completedContractions.filter((contraction) => (contraction.start + contraction.duration) > timestamp);

        if (!completedSince.length) {
            return undefined;
        }

        return completedSince.reduce((totalDuration, contraction) => totalDuration + contraction.duration, 0) / completedSince.length;
    }
);

const getAverageIntervalSince = (timestamp: number) => createSelector(
    getContractionsWithIntervals,
    (contractionsWithIntervals) => {
        const validStartedSince = contractionsWithIntervals
            .filter((contraction) => contraction.interval && contraction.start >= timestamp);

        if (!validStartedSince.length) {
            return undefined;
        }

        return validStartedSince.reduce((totalInterval, contraction) => totalInterval + contraction.interval, 0) / validStartedSince.length;
    }
);

const getStatus = createSelector(
    getRunning,
    getLastContraction,
    (running, lastContraction) => {
        if (!running) {
            return Status.Ready;
        }

        return lastContraction && !lastContraction.duration ? Status.Contraction : Status.Rest;
    }
);

const getPhaseStartTime = createSelector(
    getLastContraction,
    (lastContraction) => lastContraction && (lastContraction.start + (lastContraction.duration || 0))
);

export const timerSelectors = {
    getSlice,
    getRunning,
    getContractions,
    getLastContraction,
    getCompletedContractions,
    hasCompletedContractions,
    getContractionsWithIntervals,
    getCompletedContractionsWithIntervals,
    getReversedCompletedContractionsWithIntervals,
    getAverageDurationSince,
    getAverageIntervalSince,
    getStatus,
    getPhaseStartTime,
};
