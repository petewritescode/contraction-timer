import React, { FunctionComponent } from 'react';
import { StyledDate, StyledDuration, StyledHistoryContraction } from './history-contraction.styles';
import { formatDuration } from '../../utils/format-duration.util';
import { formatTimeAndDate } from '../../utils/format-time-and-date.util';

interface Props {
    start: number;
    duration: number;
}

export const HistoryContraction: FunctionComponent<Props> = ({ start, duration }) => (
    <StyledHistoryContraction>
        <StyledDuration>{formatDuration(duration)}</StyledDuration>
        <StyledDate>{formatTimeAndDate(start)}</StyledDate>
    </StyledHistoryContraction>
);
