import { combineReducers } from '@reduxjs/toolkit';
import { modalReducer } from './modal/modal.slice';
import { timerReducer } from './timer/timer.slice';

export const rootReducer = combineReducers({
  modal: modalReducer,
  timer: timerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
