import React, { FunctionComponent } from 'react';
import { StyledTable, StyledTBody, StyledTd, StyledTh, StyledTHead, StyledTr } from './history.styles';
import { ContractionWithInterval } from '../../models/contraction-with-interval.model';
import { formatDuration } from '../../utils/format-duration.util';
import { formatTime } from '../../utils/format-time.util';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const History: FunctionComponent = () => {
    const contractions = useSelector(timerSelectors.getCompletedContractionsWithIntervals);
    const displayContractions = [...contractions].reverse();

    const renderContraction = (contraction: ContractionWithInterval, index: number) => (
        <StyledTr key={contraction.start} showDivider={index && contraction.lastInGroup}>
            <StyledTd highlight>{formatDuration(contraction.duration)}</StyledTd>
            <StyledTd highlight>{contraction.interval !== undefined && formatDuration(contraction.interval)}</StyledTd>
            <StyledTd>{formatTime(contraction.start)}</StyledTd>
        </StyledTr>
    );

    return (
        <StyledTable>
            <StyledTHead>
                <StyledTr>
                    <StyledTh>Duration</StyledTh>
                    <StyledTh>Interval</StyledTh>
                    <StyledTh>Time</StyledTh>
                </StyledTr>
            </StyledTHead>

            <StyledTBody>
                {displayContractions.map(renderContraction)}
            </StyledTBody>
        </StyledTable>
    );
};
