import React, { FunctionComponent } from 'react';
import { StyledAverage, StyledAverages, StyledHeading } from './averages.styles';
import { Average } from './average/average.component';
import { AverageType } from '../../models/average-type.model';
import { MS_IN_AN_HOUR } from '../../constants/time.constants';
import { now } from '../../utils/now.util';
import { timerSelectors } from '../../store/timer/timer.selectors';
import { useIntervalRender } from '../../hooks/interval-render.hook';
import { useSelector } from 'react-redux';

const RENDER_INTERVAL_RUNNING = 1000;
const RENDER_INTERVAL_STOPPED = 10000;

export const Averages: FunctionComponent = () => {
    const startTimestamp = now() - MS_IN_AN_HOUR;

    const running = useSelector(timerSelectors.getRunning);
    const averageDuration = useSelector(timerSelectors.getAverageDurationSince(startTimestamp));
    const averageInterval = useSelector(timerSelectors.getAverageIntervalSince(startTimestamp));

    useIntervalRender(running ? RENDER_INTERVAL_RUNNING : RENDER_INTERVAL_STOPPED);

    return (
        <>
            <StyledHeading id="averages-heading">One hour averages</StyledHeading>

            <StyledAverages aria-labelledby="averages-heading">
                <StyledAverage>
                    <Average type={AverageType.Duration} duration={averageDuration} />
                </StyledAverage>

                <StyledAverage>
                    <Average type={AverageType.Interval} duration={averageInterval} />
                </StyledAverage>
            </StyledAverages>
        </>
    );
};
