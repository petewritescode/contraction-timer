import React, { FunctionComponent } from 'react';
import { StyledAverage, StyledLabel, StyledTime } from './average.styles';

export const Average: FunctionComponent = () => (
    <StyledAverage>
        <StyledTime>01:23</StyledTime>
        <StyledLabel>Duration</StyledLabel>
    </StyledAverage>
);
