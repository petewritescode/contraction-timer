import React, { FunctionComponent } from 'react';
import { StyledAverage, StyledLabel, StyledTime } from './average.styles';
import { AVERAGE_TYPE_TO_LABEL_MAP } from '../../../constants/average.constants';
import { AverageType } from '../../../models/average-type.model';
import { formatDuration } from '../../../utils/format-duration.util';

interface Props {
    type: AverageType,
    duration?: number;
}

export const Average: FunctionComponent<Props> = ({ type, duration }) => {
    const formattedDuration = formatDuration(duration);
    const label = AVERAGE_TYPE_TO_LABEL_MAP[type];
    const id = `average-${type.toLowerCase()}`;

    return (
        <StyledAverage>
            <StyledTime aria-labelledby={id}>{formattedDuration}</StyledTime>
            <StyledLabel id={id}>{label}</StyledLabel>
        </StyledAverage>
    );
};
