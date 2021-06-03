import { HistoryEmpty } from '../history-empty/history-empty.component';
import { HistoryList } from '../history-list/history-list.component';
import React from 'react';
import { StyledHistoryView } from './history-view.styles';
import { timerSelectors } from '../../store/timer/timer.selectors';
import { useSelector } from 'react-redux';

export const HistoryView: React.FC = () => {
  const hasCompletedContractions = useSelector(timerSelectors.hasCompletedContractions);

  return (
    <StyledHistoryView>
      {hasCompletedContractions ? <HistoryList /> : <HistoryEmpty />}
    </StyledHistoryView>
  );
};
