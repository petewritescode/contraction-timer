import { BaseCss, NormalizeCss } from './app.styles';
import React, { FunctionComponent } from 'react';
import { Layout } from '../layout/layout.component';

export const App: FunctionComponent = () => (
    <>
        <NormalizeCss />
        <BaseCss />

        <Layout />
    </>
);
