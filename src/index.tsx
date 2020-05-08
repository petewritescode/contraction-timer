import { App } from './components/app/app.component';
import { configureStore } from '@reduxjs/toolkit';
import { darkTheme } from './theme/dark.theme';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { rootReducer } from './store/root.reducer';
import { ThemeProvider } from 'styled-components';

const store = configureStore({
    reducer: rootReducer,
});

ReactDOM.render(
    (
        <Provider store={store}>
            <ThemeProvider theme={darkTheme}>
                <App />
            </ThemeProvider>
        </Provider>
    ),
    document.getElementById('root')
);
