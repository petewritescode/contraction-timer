import React, { FunctionComponent } from 'react';
import { Average } from '../average/average.component';
import { AverageType } from '../../models/average-type.model';
import { MS_IN_AN_HOUR } from '../../constants/time.constants';
import { StyledAverages } from './averages.styles';
import { useIntervalRender } from '../../hooks/interval-render.hook';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

const RENDER_INTERVAL_RUNNING = 1000;
const RENDER_INTERVAL_STOPPED = 10000;

export const Averages: FunctionComponent = () => {
    const startTimestamp = Date.now() - MS_IN_AN_HOUR;

    const running = useSelector(timerSelectors.getRunning);
    const averageDuration = useSelector(timerSelectors.getAverageDurationSince(startTimestamp));
    const averageInterval = useSelector(timerSelectors.getAverageIntervalSince(startTimestamp));

    useIntervalRender(running ? RENDER_INTERVAL_RUNNING : RENDER_INTERVAL_STOPPED);

    return (
        <StyledAverages>
            <li><Average type={AverageType.Duration} duration={averageDuration} /></li>
            <li><Average type={AverageType.Interval} duration={averageInterval} /></li>
        </StyledAverages>
    );
};
