import React, { FunctionComponent } from 'react';
import { formatDuration } from '../../../utils/format-duration.util';
import { now } from '../../../utils/now.util';
import { StyledTime } from './time.styles';
import { timerSelectors } from '../../../store/timer/timer.selectors';
import { useIntervalRender } from '../../../hooks/interval-render.hook';
import { useSelector } from 'react-redux';

const RENDER_INTERVAL = 100;

export const Time: FunctionComponent = () => {
    const running = useSelector(timerSelectors.getRunning);
    const phaseStartTime = useSelector(timerSelectors.getPhaseStartTime);

    useIntervalRender(running ? RENDER_INTERVAL : undefined);

    const duration = running && phaseStartTime ? now() - phaseStartTime : undefined;
    const formattedDuration = formatDuration(duration);

    return <StyledTime aria-label="Phase time">{formattedDuration}</StyledTime>;
};
