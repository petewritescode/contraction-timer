import React, { FunctionComponent } from 'react';
import { History } from '../history/history.component';
import { StyledHistoryView } from './history-view.styles';

export const HistoryView: FunctionComponent = () => (
    <StyledHistoryView>
        <History />
    </StyledHistoryView>
);
