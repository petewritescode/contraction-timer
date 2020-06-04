import React, { FunctionComponent } from 'react';
import { formatDuration } from '../../utils/format-duration.util';
import { now } from '../../utils/now.util';
import { StyledTime } from './time.styles';
import { UPDATE_INTERVAL_MS } from '../../constants/time.constants';
import { useIntervalRender } from '../../hooks/interval-render.hook';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const Time: FunctionComponent = () => {
    const running = useSelector(timerSelectors.getRunning);
    const phaseStartTime = useSelector(timerSelectors.getPhaseStartTime);

    useIntervalRender(running ? UPDATE_INTERVAL_MS : undefined);

    const duration = running && phaseStartTime ? now() - phaseStartTime : 0;
    const formattedDuration = formatDuration(duration);

    return <StyledTime>{formattedDuration}</StyledTime>;
};
