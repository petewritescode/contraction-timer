import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contraction } from '../../models/contraction.model';

export interface TimerState {
    running: boolean;
    contractions: Contraction[];
}

const initialState: TimerState = {
    running: false,
    contractions: [],
};

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        clear: (state) => {
            if (!state.running) {
                state.contractions = [];
            }
        },
        mark: {
            prepare: () => ({
                payload: Date.now(),
            }),
            reducer: (state, action: PayloadAction<number>) => {
                if (!state.running) {
                    state.running = true;
                    state.contractions = [];
                }

                const lastContraction = state.contractions[state.contractions.length - 1];

                if (lastContraction && !lastContraction.duration) {
                    lastContraction.duration = action.payload - lastContraction.start;
                } else {
                    state.contractions.push({
                        start: action.payload,
                    });
                }
            },
        },
        stop: {
            prepare: () => ({
                payload: Date.now(),
            }),
            reducer: (state, action: PayloadAction<number>) => {
                state.running = false;

                const lastContraction = state.contractions[state.contractions.length - 1];

                if (lastContraction && !lastContraction.duration) {
                    lastContraction.duration = action.payload - lastContraction.start;
                }
            },
        },
    },
});

export const timerActions = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
