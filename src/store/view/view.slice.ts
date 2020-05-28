import { createSlice } from '@reduxjs/toolkit';
import { View } from '../../models/view.model';

export interface ViewState {
    view: View,
}

const initialState: ViewState = {
    view: View.Timer,
};

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        toggle: (state) => {
            state.view = state.view === View.Timer ? View.History : View.Timer;
        },
    },
});

export const viewActions = viewSlice.actions;
export const viewReducer = viewSlice.reducer;
