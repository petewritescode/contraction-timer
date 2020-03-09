import React, { FunctionComponent } from 'react';
import { StyledLabel, StyledTimer, StyledTime } from './timer.styles';

export const Timer: FunctionComponent = () => (
    <StyledTimer>
        <StyledTime>00:14</StyledTime>
        <StyledLabel>Contraction</StyledLabel>
    </StyledTimer>
);
