import { viewActions, viewReducer, ViewState } from './view.slice';
import { View } from '../../models/view.model';

describe('View reducer', () => {
    describe('setView action', () => {
        it('sets the view', () => {
            const state: ViewState = {
                view: View.Chart,
            };

            const newState: ViewState = {
                view: View.List,
            };

            const action = viewActions.setView(View.List);
            const result = viewReducer(state, action);

            expect(result).toEqual(newState);
        });
    });
});
