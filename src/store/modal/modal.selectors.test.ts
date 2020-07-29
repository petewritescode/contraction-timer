import { ModalState } from './modal.slice';
import { ModalType } from '../../models/modal-type.model';
import * as modalSelectors from './modal.selectors';

describe('Modal selectors', () => {
    describe('getSlice', () => {
        it('returns the Modal slice from the state', () => {
            const state = {
                modal: {} as ModalState,
            };

            const result = modalSelectors.getSlice(state);

            expect(result).toEqual(state.modal);
        });
    });

    describe('getActive', () => {
        it('returns the active modal', () => {
            const state = {
                modal: {
                    active: ModalType.ClearHistory,
                },
            };

            const result = modalSelectors.getActive(state);

            expect(result).toEqual(state.modal.active);
        });
    });

    describe('hasActive', () => {
        it('returns true if there is an active modal', () => {
            const state = {
                modal: {
                    active: ModalType.ClearHistory,
                },
            };

            const result = modalSelectors.hasActive(state);

            expect(result).toEqual(true);
        });

        it('returns false if there is no active modal', () => {
            const state = {
                modal: {},
            };

            const result = modalSelectors.hasActive(state);

            expect(result).toEqual(false);
        });
    });
});
