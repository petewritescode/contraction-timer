import React, { FunctionComponent } from 'react';
import { StyledLabel, StyledStatusIndicator, StyledTimer } from './timer.styles';
import { STATUS_TO_LABEL_MAP } from '../../constants/status.constants';
import { StatusIndicator } from './status-indicator/status-indicator.component';
import { Time } from './time/time.component';
import { timerSelectors } from '../../store/timer/timer.selectors';
import { useSelector } from 'react-redux';

export const Timer: FunctionComponent = () => {
    const status = useSelector(timerSelectors.getStatus);
    const label = STATUS_TO_LABEL_MAP[status];

    return (
        <StyledTimer>
            <StyledStatusIndicator>
                <StatusIndicator />
            </StyledStatusIndicator>

            <Time />
            <StyledLabel>{label}</StyledLabel>
        </StyledTimer>
    );
};
