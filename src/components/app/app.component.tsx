import { BaseCss, NormalizeCss } from './app.styles';
import React, { FunctionComponent } from 'react';
import { Layout } from '../layout/layout.component';
import { ModalRenderer } from '../modal-renderer/modal-renderer.component';

export const App: FunctionComponent = () => (
    <>
        <NormalizeCss />
        <BaseCss />

        <Layout />
        <ModalRenderer />
    </>
);
