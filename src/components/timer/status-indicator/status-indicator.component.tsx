import React, { FunctionComponent } from 'react';
import { StyledStatusIndicator } from './status-indicator.styles';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../../store/timer/timer.selectors';

export const StatusIndicator: FunctionComponent = () => {
    const status = useSelector(timerSelectors.getStatus);

    return <StyledStatusIndicator status={status} />;
};
