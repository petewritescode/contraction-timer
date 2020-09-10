import React, { FunctionComponent } from 'react';
import { App } from './components/app/app.component';
import { appTheme } from './theme/app.theme';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from './store/app.store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import * as serviceWorker from './serviceWorker';

const appStore = createStore();

const Root: FunctionComponent = () => (
    <BrowserRouter>
        <Provider store={appStore}>
            <ThemeProvider theme={appTheme}>
                <App />
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.register();
