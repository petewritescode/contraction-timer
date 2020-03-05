import React, { FunctionComponent } from 'react';

import { Container, Content, Header } from './layout.styled';

const Layout: FunctionComponent = () => (
    <Container>
        <Header>Header</Header>
        <Content>Content</Content>
    </Container>
);

export default Layout;
