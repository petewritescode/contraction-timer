import React, { FunctionComponent } from 'react';
import { StyledContraction, StyledDate, StyledDuration } from './contraction.styles';
import { formatDuration } from '../../../utils/format-duration.util';
import { formatTimeAndDate } from '../../../utils/format-time-and-date.util';

interface Props {
    start: number;
    duration: number;
}

export const Contraction: FunctionComponent<Props> = ({ start, duration }) => (
    <StyledContraction>
        <StyledDuration>{formatDuration(duration)}</StyledDuration>
        <StyledDate>{formatTimeAndDate(start)}</StyledDate>
    </StyledContraction>
);
