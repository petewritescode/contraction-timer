import React, { Fragment, FunctionComponent } from 'react';
import { HistoryBreak } from '../history-break/history-break.component';
import { HistoryContraction } from '../history-contraction/history-contraction.component';
import { HistoryInterval } from '../history-interval/history-interval.component';
import { StyledHistory } from './history.styles';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const History: FunctionComponent = () => {
    const reversedContractions = useSelector(timerSelectors.getReversedCompletedContractionsWithIntervals);
    const maxIndex = reversedContractions.length - 1;

    return (
        <StyledHistory>
            {reversedContractions.map((contraction, index) => (
                <Fragment key={contraction.start}>
                    <HistoryContraction start={contraction.start} duration={contraction.duration} />
                    {contraction.interval !== undefined && <HistoryInterval duration={contraction.interval} />}
                    {index < maxIndex && contraction.interval === undefined && <HistoryBreak />}
                </Fragment>
            ))}
        </StyledHistory>
    );
};
