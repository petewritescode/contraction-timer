import { viewActions, viewReducer, ViewState } from './view.slice';
import { View } from '../../models/view.model';

describe('View reducer', () => {
    describe('toggle action', () => {
        it('sets the view to List if it is currently Chart', () => {
            const state: ViewState = {
                view: View.Chart,
            };

            const newState: ViewState = {
                view: View.List,
            };

            const action = viewActions.toggle();
            const result = viewReducer(state, action);

            expect(result).toEqual(newState);
        });

        it('sets the view to Chart if it is currently List', () => {
            const state: ViewState = {
                view: View.List,
            };

            const newState: ViewState = {
                view: View.Chart,
            };

            const action = viewActions.toggle();
            const result = viewReducer(state, action);

            expect(result).toEqual(newState);
        });
    });
});
