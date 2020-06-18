import React, { FunctionComponent } from 'react';
import { ContractionWithInterval } from '../../models/contraction-with-interval.model';
import { formatDuration } from '../../utils/format-duration.util';
import { formatTime } from '../../utils/format-time.util';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const HistoryView: FunctionComponent = () => {
    const contractions = useSelector(timerSelectors.getCompletedContractionsWithIntervals);
    const displayContractions = [...contractions].reverse();

    const renderContraction = (contraction: ContractionWithInterval) => (
        <tr key={contraction.start}>
            <td>{formatTime(contraction.start)}</td>
            <td>{formatDuration(contraction.duration)}</td>
            <td>{contraction.interval !== undefined && formatDuration(contraction.interval)}</td>
        </tr>
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>Start</th>
                    <th>Duration</th>
                    <th>Interval</th>
                </tr>
            </thead>

            <tbody>
                {displayContractions.map(renderContraction)}
            </tbody>
        </table>
    );
};
