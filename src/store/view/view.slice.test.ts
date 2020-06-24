import { viewActions, viewReducer, ViewState } from './view.slice';
import { View } from '../../models/view.model';

describe('View reducer', () => {
    describe('setView action', () => {
        it('sets the view', () => {
            const state: ViewState = {
                view: View.Timer,
            };

            const newState: ViewState = {
                view: View.History,
            };

            const action = viewActions.setView(View.History);
            const result = viewReducer(state, action);

            expect(result).toEqual(newState);
        });
    });
});
