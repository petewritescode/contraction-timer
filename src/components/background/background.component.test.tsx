import { cleanup, render } from '../../test/utils/test.utils';
import { AppState } from '../../store/root.reducer';
import { appTheme } from '../../theme/app.theme';
import { Background } from './background.component';
import React from 'react';

describe('Background component', () => {
    it('renders the correct background colour', () => {
        const initialStateReady: Partial<AppState> = {
            timer: {
                running: false,
                contractions: [],
            },
        };

        const initialStateContraction: Partial<AppState> = {
            timer: {
                running: true,
                contractions: [
                    { start: 1000000000000 },
                ],
            },
        };

        const initialStateRest: Partial<AppState> = {
            timer: {
                running: true,
                contractions: [
                    { start: 1000000000000, duration: 30000 },
                ],
            },
        };

        let { container } = render(<Background />, { initialState: initialStateReady });
        expect(container.firstChild).toHaveStyle(`background-color: ${appTheme.color.ready}`);
        cleanup();

        ({ container } = render(<Background />, { initialState: initialStateContraction }));
        expect(container.firstChild).toHaveStyle(`background-color: ${appTheme.color.contraction}`);
        cleanup();

        ({ container } = render(<Background />, { initialState: initialStateRest }));
        expect(container.firstChild).toHaveStyle(`background-color: ${appTheme.color.rest}`);
    });
});
