import { StyledContraction, StyledDate, StyledDuration } from './contraction.styles';
import { formatDuration } from '../../../utils/format-duration.util';
import { formatTimeAndDate } from '../../../utils/format-time-and-date.util';
import React from 'react';

interface Props {
    start: number;
    duration: number;
}

export const Contraction: React.FC<Props> = ({ start, duration }) => (
    <StyledContraction>
        <StyledDuration>{formatDuration(duration)}</StyledDuration>
        <StyledDate>{formatTimeAndDate(start)}</StyledDate>
    </StyledContraction>
);
