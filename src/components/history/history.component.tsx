import React, { FunctionComponent } from 'react';
import { HistoryEmpty } from '../history-empty/history-empty.component';
import { HistoryList } from '../history-list/history-list.component';
import { StyledHistory } from './history.styles';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const History: FunctionComponent = () => {
    const hasCompletedContractions = useSelector(timerSelectors.hasCompletedContractions);

    return (
        <StyledHistory>
            {!hasCompletedContractions && <HistoryEmpty />}
            {hasCompletedContractions && <HistoryList />}
        </StyledHistory>
    );
};
