import React, { FunctionComponent } from 'react';
import { formatDuration } from '../../utils/format-duration.util';
import { StyledHistoryInterval } from './history-interval.styles';

interface Props {
    duration: number;
}

export const HistoryInterval: FunctionComponent<Props> = ({ duration }) => (
    <StyledHistoryInterval>{formatDuration(duration)}</StyledHistoryInterval>
);
