import React, { FunctionComponent } from 'react';
import { Container } from '../container/container.component';
import { History } from '../history/history.component';
import { StyledHistoryView } from './history-view.styles';

export const HistoryView: FunctionComponent = () => (
    <StyledHistoryView>
        <Container>
            <History />
        </Container>
    </StyledHistoryView>
);
