import React, { FunctionComponent } from 'react';
import { durationToDigits } from '../../utils/duration-to-digits.util';
import { StyledTime } from './time.styles';
import { UPDATE_INTERVAL_MS } from '../../constants/time.constants';
import { useIntervalRender } from '../../hooks/interval-render.hook';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const Time: FunctionComponent = () => {
    const running = useSelector(timerSelectors.getRunning);
    const phaseStartTime = useSelector(timerSelectors.getPhaseStartTime);

    useIntervalRender(running ? UPDATE_INTERVAL_MS : undefined);

    const duration = phaseStartTime ? Date.now() - phaseStartTime : 0;
    const digits = durationToDigits(duration);

    // eslint-disable-next-line react/no-array-index-key
    const renderSegment = (segment: string[]) => segment.map((digit, index) => <div key={index}>{digit}</div>);

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
