import React, { FunctionComponent } from 'react';
import { CssReset } from './app.styled';
import Layout from '../layout/layout.component';

const App: FunctionComponent = () => (
    <>
        <CssReset />
        <Layout />
    </>
);

export default App;
