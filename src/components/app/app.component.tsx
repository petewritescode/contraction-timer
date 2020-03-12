import React, { FunctionComponent } from 'react';
import { Layout } from '../layout/layout.component';
import { BaseCss, NormalizeCss } from './app.styles';

export const App: FunctionComponent = () => (
    <>
        <NormalizeCss />
        <BaseCss />

        <Layout />
    </>
);
