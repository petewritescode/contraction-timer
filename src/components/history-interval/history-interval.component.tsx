import React, { FunctionComponent } from 'react';
import { StyledHistoryInterval } from './history-interval.styles';

interface Props {
    duration: number;
}

export const HistoryInterval: FunctionComponent<Props> = ({ duration }) => (
    <StyledHistoryInterval>Interval {duration}</StyledHistoryInterval>
);
