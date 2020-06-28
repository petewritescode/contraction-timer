import { App } from './components/app/app.component';
import { configureStore } from '@reduxjs/toolkit';
import { darkTheme } from './theme/dark.theme';
import persistState from 'redux-localstorage';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { rootReducer } from './store/root.reducer';
import { ThemeProvider } from 'styled-components';

// Type definitions are incorrect, use 'any' to bypass (https://github.com/elgerlambert/redux-localstorage/issues/78)
const persistStateEnhancer: any = persistState(['timer'] as any);

const store = configureStore({
    reducer: rootReducer,
    enhancers: [persistStateEnhancer],
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
