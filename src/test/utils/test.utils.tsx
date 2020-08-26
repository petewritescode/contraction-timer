import React, { FunctionComponent } from 'react';
import { AppState } from '../../store/root.reducer';
import { appStore } from '../../store/app.store';
import { appTheme } from '../../theme/app.theme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

type RenderParameters = Parameters<typeof render>;
type UI = RenderParameters[0];
type Options = RenderParameters[1] & { initialState?: Partial<AppState>; };

const mockStore = configureStore();

export const customRender = (ui: UI, options: Options = {}) => {
    const { initialState, ...renderOptions } = options;
    const store = initialState ? mockStore(initialState) : appStore;

    const Wrapper: FunctionComponent = ({ children }) => (
        <Provider store={store}>
            <ThemeProvider theme={appTheme}>
                {children}
            </ThemeProvider>
        </Provider>
    );

    return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { customRender as render };

export const dateSpy = (timestamp: number) => jest.spyOn(Date, 'now').mockReturnValueOnce(timestamp);
