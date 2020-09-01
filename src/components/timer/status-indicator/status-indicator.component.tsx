import React, { FunctionComponent } from 'react';
import { StyledStatusIndicator } from './status-indicator.styles';
import { timerSelectors } from '../../../store/timer/timer.selectors';
import { useSelector } from 'react-redux';

export const StatusIndicator: FunctionComponent = () => {
    const status = useSelector(timerSelectors.getStatus);

    return <StyledStatusIndicator status={status} />;
};
