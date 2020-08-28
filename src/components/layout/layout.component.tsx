import React, { FunctionComponent } from 'react';
import { StyledContent, StyledLayout } from './layout.styles';
import { Header } from '../header/header.component';
import { HistoryView } from '../history-view/history-view.component';
import { Nav } from '../nav/nav.component';
import { TimerView } from '../timer-view/timer-view.component';
import { useSelector } from 'react-redux';
import { View } from '../../models/view.model';
import * as timerSelectors from '../../store/timer/timer.selectors';
import * as viewSelectors from '../../store/view/view.selectors';

export const Layout: FunctionComponent = () => {
    const status = useSelector(timerSelectors.getStatus);
    const view = useSelector(viewSelectors.getView);
    const content = view === View.Timer ? <TimerView /> : <HistoryView />;

    return (
        <StyledLayout status={status}>
            <div>
                <Header />
            </div>

            <StyledContent>
                {content}
            </StyledContent>

            <div>
                <Nav />
            </div>
        </StyledLayout>
    );
};
