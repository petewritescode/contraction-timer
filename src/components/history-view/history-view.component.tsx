import React, { FunctionComponent } from 'react';
import { HistoryEmpty } from '../history-empty/history-empty.component';
import { HistoryList } from '../history-list/history-list.component';
import { StyledHistoryView } from './history-view.styles';
import { timerSelectors } from '../../store/timer/timer.selectors';
import { useSelector } from 'react-redux';

export const HistoryView: FunctionComponent = () => {
    const hasCompletedContractions = useSelector(timerSelectors.hasCompletedContractions);

    return (
        <StyledHistoryView>
            {hasCompletedContractions ? <HistoryList /> : <HistoryEmpty />}
        </StyledHistoryView>
    );
};
