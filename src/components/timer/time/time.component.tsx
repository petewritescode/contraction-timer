import React, { FunctionComponent } from 'react';
import { formatDuration } from '../../../utils/format-duration.util';
import { now } from '../../../utils/now.util';
import { StyledTime } from './time.styles';
import { timerSelectors } from '../../../store/timer/timer.selectors';
import { useIntervalUpdate } from '../../../hooks/interval-update.hook';
import { useSelector } from 'react-redux';

const UPDATE_INTERVAL = 100;

export const Time: FunctionComponent = () => {
    const running = useSelector(timerSelectors.getRunning);
    const phaseStartTime = useSelector(timerSelectors.getPhaseStartTime);

    useIntervalUpdate(running ? UPDATE_INTERVAL : undefined);

    const duration = running && phaseStartTime ? now() - phaseStartTime : undefined;
    const formattedDuration = formatDuration(duration);

    return <StyledTime aria-label="Phase time">{formattedDuration}</StyledTime>;
};
