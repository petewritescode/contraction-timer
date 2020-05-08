import { createSelector } from '@reduxjs/toolkit';
import { ViewState } from './view.slice';

export const getSlice = (state: { view: ViewState }) => state.view;
export const getView = createSelector(getSlice, (slice) => slice.view);
