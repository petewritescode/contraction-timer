import React, { FunctionComponent } from 'react';
import { Header } from '../header/header.component';
import { TimerView } from '../timer-view/timer-view.component';
import { StyledContent, StyledLayout } from './layout.styles';

export const Layout: FunctionComponent = () => (
    <StyledLayout>
        <Header />

        <StyledContent>
            <TimerView />
        </StyledContent>
    </StyledLayout>
);
