import React, { FunctionComponent } from 'react';
import { StyledContent, StyledControls, StyledLayout } from './layout.styles';
import { Controls } from '../controls/controls.component';
import { HistoryView } from '../history-view/history-view.component';
import { TimerView } from '../timer-view/timer-view.component';
import { useSelector } from 'react-redux';
import { View } from '../../models/view.model';
import * as viewSelectors from '../../store/view/view.selectors';

export const Layout: FunctionComponent = () => {
    const view = useSelector(viewSelectors.getView);
    const content = view === View.Timer ? <TimerView /> : <HistoryView />;

    return (
        <StyledLayout>
            <StyledContent>
                {content}
            </StyledContent>

            <StyledControls>
                <Controls />
            </StyledControls>
        </StyledLayout>
    );
};
