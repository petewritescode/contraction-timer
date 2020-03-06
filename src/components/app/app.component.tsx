import React, { FunctionComponent } from 'react';
import { Layout } from '../layout/layout.component';
import { GlobalStyles } from './app.styled';

export const App: FunctionComponent = () => (
    <>
        <GlobalStyles />
        <Layout />
    </>
);
