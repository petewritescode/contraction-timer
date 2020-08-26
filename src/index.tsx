import React, { FunctionComponent } from 'react';
import { App } from './components/app/app.component';
import { appStore } from './store/app.store';
import { appTheme } from './theme/app.theme';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

const Root: FunctionComponent = () => (
    <Provider store={appStore}>
        <ThemeProvider theme={appTheme}>
            <App />
        </ThemeProvider>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
