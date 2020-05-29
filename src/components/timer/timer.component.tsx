import React, { FunctionComponent } from 'react';
import { StyledLabel, StyledTimer } from './timer.styles';
import { STATUS_TO_LABEL_MAP } from '../../constants/status.constants';
import { Time } from '../time/time.component';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const Timer: FunctionComponent = () => {
    const status = useSelector(timerSelectors.getStatus);
    const label = STATUS_TO_LABEL_MAP[status];

    return (
        <StyledTimer>
            <Time />
            <StyledLabel>{label}</StyledLabel>
        </StyledTimer>
    );
};
