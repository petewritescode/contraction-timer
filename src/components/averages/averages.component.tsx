import React, { FunctionComponent } from 'react';
import { Average } from '../average/average.component';
import { AverageType } from '../../models/average-type.model';
import { MS_IN_AN_HOUR } from '../../constants/time.constants';
import { StyledAverages } from './averages.styles';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const Averages: FunctionComponent = () => {
    const startTimestamp = Date.now() - MS_IN_AN_HOUR;

    const averageDuration = useSelector(timerSelectors.getAverageDurationSince(startTimestamp));
    const averageInterval = useSelector(timerSelectors.getAverageIntervalSince(startTimestamp));

    return (
        <StyledAverages>
            <li><Average type={AverageType.Duration} duration={averageDuration} /></li>
            <li><Average type={AverageType.Interval} duration={averageInterval} /></li>
        </StyledAverages>
    );
};
