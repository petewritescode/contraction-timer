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
        clearComplete: (state) => {
            state.contractions = state.contractions.filter((contraction) => contraction.duration === undefined);
        },
        stop: {
            prepare: () => ({
                payload: Date.now(),
            }),
            reducer: (state, action: PayloadAction<number>) => {
                if (!state.running) {
                    return;
                }

                state.running = false;

                const lastContraction = state.contractions[state.contractions.length - 1];

                if (lastContraction) {
                    lastContraction.lastInGroup = true;

                    if (lastContraction.duration === undefined) {
                        lastContraction.duration = action.payload - lastContraction.start;
                    }
                }
            },
        },
        toggleContraction: {
            prepare: () => ({
                payload: Date.now(),
            }),
            reducer: (state, action: PayloadAction<number>) => {
                state.running = true;

                const lastContraction = state.contractions[state.contractions.length - 1];

                if (lastContraction && lastContraction.duration === undefined) {
                    lastContraction.duration = action.payload - lastContraction.start;
                } else {
                    state.contractions.push({
                        start: action.payload,
                    });
                }
            },
        },
    },
});

export const timerActions = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
