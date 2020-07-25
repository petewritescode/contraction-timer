import { createSelector } from '@reduxjs/toolkit';
import { ModalState } from './modal.slice';

export const getSlice = (state: { modal: ModalState }) => state.modal;
export const getActive = createSelector(getSlice, (slice) => slice.active);
export const hasActive = createSelector(getActive, (active) => Boolean(active));
