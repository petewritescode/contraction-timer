import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Modal } from '../../models/modal.model';

export interface ModalState {
    active?: Modal;
}

const initialState: ModalState = {};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        hide: (state) => {
            state.active = undefined;
        },
        show: {
            prepare: (modal: Modal) => ({
                payload: modal,
            }),
            reducer: (state, action: PayloadAction<Modal>) => {
                state.active = action.payload;
            },
        },
    },
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
