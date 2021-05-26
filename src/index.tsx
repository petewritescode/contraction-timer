import { App } from './components/app/app.component';
import { appTheme } from './theme/app.theme';
import { createStore } from './store/app.store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import * as serviceWorker from './serviceWorker';

const appStore = createStore(true);

const Root: React.FC = () => (
    <HashRouter>
        <Provider store={appStore}>
            <ThemeProvider theme={appTheme}>
                <App />
            </ThemeProvider>
        </Provider>
    </HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.register();
