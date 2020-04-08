import { App } from './components/app/app.component';
import { darkTheme } from './theme/dark.theme';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
    (
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    ),
    document.getElementById('root')
);
