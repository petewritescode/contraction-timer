import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalType } from '../../models/modal-type.model';

export interface ModalState {
  active?: ModalType;
}

const initialState: ModalState = {};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    close: (state) => {
      state.active = undefined;
    },
    open: {
      prepare: (modal: ModalType) => ({
        payload: modal,
      }),
      reducer: (state, action: PayloadAction<ModalType>) => {
        state.active = action.payload;
      },
    },
  },
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
