import React, { FunctionComponent } from 'react';
import { formatDuration } from '../../utils/format-duration.util';
import { StyledHistoryContraction } from './history-contraction.styles';

interface Props {
    start: number;
    duration: number;
}

export const HistoryContraction: FunctionComponent<Props> = ({ start, duration }) => (
    <StyledHistoryContraction>{formatDuration(duration)} / {start}</StyledHistoryContraction>
);
