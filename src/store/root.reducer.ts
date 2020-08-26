import { combineReducers } from '@reduxjs/toolkit';
import { modalReducer } from './modal/modal.slice';
import { timerReducer } from './timer/timer.slice';
import { viewReducer } from './view/view.slice';

export const rootReducer = combineReducers({
    modal: modalReducer,
    timer: timerReducer,
    view: viewReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
