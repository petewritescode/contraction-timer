import { act, render } from '@testing-library/react';
import React, { FunctionComponent } from 'react';
import { AppState } from '../../store/root.reducer';
import { appTheme } from '../../theme/app.theme';
import configureStore from 'redux-mock-store';
import { createStore } from '../../store/app.store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

type RenderParameters = Parameters<typeof render>;
type UI = RenderParameters[0];
type Options = RenderParameters[1] & { initialState?: Partial<AppState>; };

export const customRender = (ui: UI, options: Options = {}) => {
    const { initialState, ...renderOptions } = options;
    const store = initialState ? configureStore()(initialState) : createStore(false);

    const Wrapper: FunctionComponent = ({ children }) => (
        <MemoryRouter>
            <Provider store={store}>
                <ThemeProvider theme={appTheme}>
                    {children}
                </ThemeProvider>
            </Provider>
        </MemoryRouter>
    );

    return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { customRender as render };

export const mockNow = (timestamp: number) => jest.spyOn(Date, 'now').mockReturnValue(timestamp);

export const startFakeTimer = (startTime = 1000000000000) => {
    let time = startTime;
    mockNow(time);
    jest.useFakeTimers();

    const advanceTime = (duration: number) => act(() => {
        time += duration;
        mockNow(time);
        jest.advanceTimersByTime(duration);
    });

    return advanceTime;
};
