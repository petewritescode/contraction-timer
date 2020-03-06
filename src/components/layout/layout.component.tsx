import React, { FunctionComponent } from 'react';
import { Header } from '../header/header.component';
import { Content, Wrapper } from './layout.styled';

export const Layout: FunctionComponent = () => (
    <Wrapper>
        <header>
            <Header heading="test" />
        </header>

        <Content>Content</Content>
    </Wrapper>
);
