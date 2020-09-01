import { createSelector } from '@reduxjs/toolkit';
import { ViewState } from './view.slice';

const getSlice = (state: { view: ViewState }) => state.view;
const getView = createSelector(getSlice, (slice) => slice.view);

export const viewSelectors = {
    getSlice,
    getView,
};
