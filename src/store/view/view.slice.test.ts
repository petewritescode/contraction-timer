import { viewActions, viewReducer, ViewState } from './view.slice';
import { View } from '../../models/view.model';

describe('View reducer', () => {
    describe('toggle action', () => {
        it('sets the view to History if it is currently Timer', () => {
            const state: ViewState = {
                view: View.Timer,
            };

            const newState: ViewState = {
                view: View.History,
            };

            const action = viewActions.toggle();
            const result = viewReducer(state, action);

            expect(result).toEqual(newState);
        });

        it('sets the view to Timer if it is currently History', () => {
            const state: ViewState = {
                view: View.History,
            };

            const newState: ViewState = {
                view: View.Timer,
            };

            const action = viewActions.toggle();
            const result = viewReducer(state, action);

            expect(result).toEqual(newState);
        });
    });
});
