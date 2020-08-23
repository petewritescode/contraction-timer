import { App } from './components/app/app.component';
import { appStore } from './store/app.store';
import { appTheme } from './theme/app.theme';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
    (
        <Provider store={appStore}>
            <ThemeProvider theme={appTheme}>
                <App />
            </ThemeProvider>
        </Provider>
    ),
    document.getElementById('root')
);
