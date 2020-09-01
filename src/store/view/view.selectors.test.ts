import { View } from '../../models/view.model';
import { viewSelectors } from './view.selectors';
import { ViewState } from './view.slice';

describe('View selectors', () => {
    describe('getSlice', () => {
        it('returns the view slice from the state', () => {
            const state = {
                view: {} as ViewState,
            };

            const result = viewSelectors.getSlice(state);

            expect(result).toEqual(state.view);
        });
    });

    describe('getView', () => {
        it('returns the view', () => {
            const state = {
                view: {
                    view: View.Timer,
                },
            };

            const result = viewSelectors.getView(state);

            expect(result).toEqual(state.view.view);
        });
    });
});
