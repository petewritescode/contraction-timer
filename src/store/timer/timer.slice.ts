import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contraction } from '../../models/contraction.model';
import { now } from '../../utils/now.util';

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

            if (!state.contractions.length) {
                state.running = false;
            }
        },
        stop: {
            prepare: () => ({
                payload: now(),
            }),
            reducer: (state, action: PayloadAction<number>) => {
                if (!state.running) {
                    return;
                }

                state.running = false;

                const lastContraction = state.contractions[state.contractions.length - 1];

                if (lastContraction && lastContraction.duration === undefined) {
                    lastContraction.duration = action.payload - lastContraction.start;
                }
            },
        },
        toggleContraction: {
            prepare: () => ({
                payload: now(),
            }),
            reducer: (state, action: PayloadAction<number>) => {
                const lastContraction = state.contractions[state.contractions.length - 1];

                if (lastContraction && lastContraction.duration === undefined) {
                    lastContraction.duration = action.payload - lastContraction.start;
                } else {
                    state.contractions.push({
                        start: action.payload,
                        ...(state.running ? {} : { firstInGroup: true }),
                    });
                }

                state.running = true;
            },
        },
    },
});

export const timerActions = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
