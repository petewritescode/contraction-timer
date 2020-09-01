import React, { FunctionComponent } from 'react';
import { Container } from '../container/container.component';
import { HistoryView } from '../history-view/history-view.component';
import { StyledContent } from './content.styles';
import { TimerView } from '../timer-view/timer-view.component';
import { useSelector } from 'react-redux';
import { View } from '../../models/view.model';
import { viewSelectors } from '../../store/view/view.selectors';

export const Content: FunctionComponent = () => {
    const view = useSelector(viewSelectors.getView);
    const content = view === View.Timer ? <TimerView /> : <HistoryView />;

    return (
        <StyledContent>
            <Container fullHeight padded>
                {content}
            </Container>
        </StyledContent>
    );
};
