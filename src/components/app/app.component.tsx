import React, { FunctionComponent } from 'react';
import { Layout } from '../layout/layout.component';
import { BaseStyles, NormalizeCss } from './app.styles';

export const App: FunctionComponent = () => (
    <>
        <NormalizeCss />
        <BaseStyles />

        <Layout />
    </>
);
