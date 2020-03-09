import React, { FunctionComponent } from 'react';
import { Average } from '../average/average.component';
import { StyledAverages } from './averages.styles';

export const Averages: FunctionComponent = () => (
    <StyledAverages>
        <li><Average /></li>
        <li><Average /></li>
    </StyledAverages>
);
