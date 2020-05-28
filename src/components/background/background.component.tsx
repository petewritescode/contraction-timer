import React, { FunctionComponent } from 'react';
import { StyledBackground } from './background.styles';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const Background: FunctionComponent = () => {
    const status = useSelector(timerSelectors.getStatus);

    return <StyledBackground status={status} />;
};
