import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
        setView: {
            prepare: (view: View) => ({
                payload: view,
            }),
            reducer: (state, action: PayloadAction<View>) => {
                state.view = action.payload;
            },
        },
    },
});

export const viewActions = viewSlice.actions;
export const viewReducer = viewSlice.reducer;
