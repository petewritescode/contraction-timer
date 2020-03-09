import React, { FunctionComponent } from 'react';
import { Header } from '../header/header.component';
import { StyledContent, StyledLayout } from './layout.styles';

export const Layout: FunctionComponent = () => (
    <StyledLayout>
        <Header />
        <StyledContent>Content</StyledContent>
    </StyledLayout>
);
