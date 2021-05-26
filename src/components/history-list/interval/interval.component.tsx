import { formatDuration } from '../../../utils/format-duration.util';
import React from 'react';
import { StyledInterval } from './interval.styles';

interface Props {
    duration: number;
}

export const Interval: React.FC<Props> = ({ duration }) => (
    <StyledInterval>{formatDuration(duration)}</StyledInterval>
);
