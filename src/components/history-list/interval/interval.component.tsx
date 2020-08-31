import React, { FunctionComponent } from 'react';
import { formatDuration } from '../../../utils/format-duration.util';
import { StyledInterval } from './interval.styles';

interface Props {
    duration: number;
}

export const Interval: FunctionComponent<Props> = ({ duration }) => (
    <StyledInterval>{formatDuration(duration)}</StyledInterval>
);
