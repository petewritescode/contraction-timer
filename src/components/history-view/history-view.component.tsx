import React, { FunctionComponent } from 'react';
import { HistoryEmpty } from '../history-empty/history-empty.component';
import { HistoryList } from '../history-list/history-list.component';
import { StyledHistoryView } from './history-view.styles';
import { useSelector } from 'react-redux';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const HistoryView: FunctionComponent = () => {
    const hasCompletedContractions = useSelector(timerSelectors.hasCompletedContractions);

    return (
        <StyledHistoryView>
            {!hasCompletedContractions && <HistoryEmpty />}
            {hasCompletedContractions && <HistoryList />}
        </StyledHistoryView>
    );
};
