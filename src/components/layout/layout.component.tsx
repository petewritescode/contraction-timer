import React, { FunctionComponent } from 'react';

import { Content, Header, Wrapper } from './layout.styled';

export const Layout: FunctionComponent = () => (
    <Wrapper>
        <Header>Header</Header>
        <Content>Content</Content>
    </Wrapper>
);
