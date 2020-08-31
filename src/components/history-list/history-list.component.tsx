import React, { Fragment, FunctionComponent } from 'react';
import { Break } from './break/break.component';
import { Contraction } from './contraction/contraction.component';
import { Interval } from './interval/interval.component';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const HistoryList: FunctionComponent = () => {
    const reversedContractions = useSelector(timerSelectors.getReversedCompletedContractionsWithIntervals);
    const maxIndex = reversedContractions.length - 1;

    return (
        <ol>
            {reversedContractions.map((contraction, index) => (
                <Fragment key={contraction.start}>
                    <Contraction start={contraction.start} duration={contraction.duration} />
                    {contraction.interval && <Interval duration={contraction.interval} />}
                    {index < maxIndex && !contraction.interval && <Break />}
                </Fragment>
            ))}
        </ol>
    );
};
