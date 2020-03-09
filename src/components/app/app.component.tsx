import React, { FunctionComponent } from 'react';
import { Layout } from '../layout/layout.component';
import { CssReset, GlobalStyles } from './app.styles';

export const App: FunctionComponent = () => (
    <>
        <CssReset />
        <GlobalStyles />
        <Layout />
    </>
);
