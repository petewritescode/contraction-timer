import { modalActions, modalReducer, ModalState } from './modal.slice';
import { Modal } from '../../models/modal.model';

describe('Modal reducer', () => {
    describe('hide action', () => {
        it('clears the active modal', () => {
            const state: ModalState = {
                active: Modal.ClearHistory,
            };

            const newState: ModalState = {};

            const action = modalActions.hide();
            const result = modalReducer(state, action);

            expect(result).toEqual(newState);
        });
    });

    describe('show action', () => {
        it('sets the active modal', () => {
            const state: ModalState = {};

            const newState: ModalState = {
                active: Modal.ClearHistory,
            };

            const action = modalActions.show(Modal.ClearHistory);
            const result = modalReducer(state, action);

            expect(result).toEqual(newState);
        });
    });
});
