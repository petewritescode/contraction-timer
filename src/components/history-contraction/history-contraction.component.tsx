import React, { FunctionComponent } from 'react';
import { StyledHistoryContraction } from './history-contraction.styles';

interface Props {
    start: number;
    duration: number;
}

export const HistoryContraction: FunctionComponent<Props> = ({ start, duration }) => (
    <StyledHistoryContraction>Contraction {start} {duration}</StyledHistoryContraction>
);
