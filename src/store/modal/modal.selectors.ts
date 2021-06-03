import { createSelector } from '@reduxjs/toolkit';
import { ModalState } from './modal.slice';

const getSlice = (state: { modal: ModalState }) => state.modal;
const getActive = createSelector(getSlice, (slice) => slice.active);
const hasActive = createSelector(getActive, (active) => Boolean(active));

export const modalSelectors = {
  getSlice,
  getActive,
  hasActive,
};
