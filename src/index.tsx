import React, { FunctionComponent } from 'react';
import { App } from './components/app/app.component';
import { appTheme } from './theme/app.theme';
import { createStore } from './store/app.store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

const appStore = createStore();

const Root: FunctionComponent = () => (
    <Provider store={appStore}>
        <ThemeProvider theme={appTheme}>
            <App />
        </ThemeProvider>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
