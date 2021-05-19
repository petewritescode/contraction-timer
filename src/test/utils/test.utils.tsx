import { act, render } from '@testing-library/react';
import React, { FunctionComponent } from 'react';
import { appTheme } from '../../theme/app.theme';
import { createStore } from '../../store/app.store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

export const customRender = (ui: React.ReactElement, path = '') => {
    const store = createStore(false);

    const Wrapper: FunctionComponent = ({ children }) => (
        <MemoryRouter initialEntries={[path]}>
            <Provider store={store}>
                <ThemeProvider theme={appTheme}>
                    {children}
                </ThemeProvider>
            </Provider>
        </MemoryRouter>
    );

    return render(ui, { wrapper: Wrapper });
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
