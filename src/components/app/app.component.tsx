import { BaseCss, NormalizeCss } from './app.styles';
import { Layout } from '../layout/layout.component';
import { ModalRenderer } from '../modal-renderer/modal-renderer.component';
import React from 'react';
import { useFocusOutlines } from '../../hooks/focus-outlines.hook';

export const App: React.FC = () => {
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
