import { modalActions, modalReducer, ModalState } from './modal.slice';
import { ModalType } from '../../models/modal-type.model';

describe('Modal reducer', () => {
  describe('close action', () => {
    it('clears the active modal', () => {
      const state: ModalState = {
        active: ModalType.ClearHistory,
      };

      const newState: ModalState = {};

      const action = modalActions.close();
      const result = modalReducer(state, action);

      expect(result).toEqual(newState);
    });
  });

  describe('open action', () => {
    it('sets the active modal', () => {
      const state: ModalState = {};

      const newState: ModalState = {
        active: ModalType.ClearHistory,
      };

      const action = modalActions.open(ModalType.ClearHistory);
      const result = modalReducer(state, action);

      expect(result).toEqual(newState);
    });
  });
});
