import React, { FunctionComponent } from 'react';
import { StyledContent, StyledLayout } from './layout.styles';
import { Header } from '../header/header.component';
import { TimerView } from '../timer-view/timer-view.component';

export const Layout: FunctionComponent = () => (
    <StyledLayout>
        <Header />

        <StyledContent>
            <TimerView />
        </StyledContent>
    </StyledLayout>
);
