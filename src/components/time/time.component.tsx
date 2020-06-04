import React, { FunctionComponent } from 'react';
import { durationToDigits } from '../../utils/duration-to-digits.util';
import { now } from '../../utils/now.util';
import { StyledTime } from './time.styles';
import { UPDATE_INTERVAL_MS } from '../../constants/time.constants';
import { useIntervalRender } from '../../hooks/interval-render.hook';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

// eslint-disable-next-line react/no-array-index-key
const renderSegment = (segment: string[]) => segment.map((digit, index) => <div key={index}>{digit}</div>);

export const Time: FunctionComponent = () => {
    const running = useSelector(timerSelectors.getRunning);
    const phaseStartTime = useSelector(timerSelectors.getPhaseStartTime);

    useIntervalRender(running ? UPDATE_INTERVAL_MS : undefined);

    const duration = running && phaseStartTime ? now() - phaseStartTime : 0;
    const digits = durationToDigits(duration);

    return (
        <StyledTime>
            {digits.hours && (
                <>
                    {renderSegment(digits.hours)}
                    <div>:</div>
                </>
            )}
            {renderSegment(digits.minutes)}
            <div>:</div>
            {renderSegment(digits.seconds)}
        </StyledTime>
    );
};
