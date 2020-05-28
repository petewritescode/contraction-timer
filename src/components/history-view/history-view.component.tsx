import React, { FunctionComponent } from 'react';
import { Contraction } from '../../models/contraction.model';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const HistoryView: FunctionComponent = () => {
    const completedContrations = useSelector(timerSelectors.getCompletedContractions);

    const renderContraction = (contraction: Contraction) => (
        <tr key={contraction.start}>
            <td>{contraction.start}</td>
            <td>{contraction.duration}</td>
        </tr>
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>Start</th>
                    <th>Duration</th>
                </tr>
            </thead>

            <tbody>
                {completedContrations.map(renderContraction)}
            </tbody>
        </table>
    );
};
