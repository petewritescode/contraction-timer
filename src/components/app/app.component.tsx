import { BaseCss, NormalizeCss } from './app.styles';
import React, { FunctionComponent } from 'react';
import { Layout } from '../layout/layout.component';
import { ModalRenderer } from '../modal-renderer/modal-renderer.component';
import { useFocusOutlines } from '../../hooks/focus-outlines.hook';

export const App: FunctionComponent = () => {
    useFocusOutlines();

    return (
        <>
            <NormalizeCss />
            <BaseCss />

            <Layout />
            <ModalRenderer />
        </>
    );
};
