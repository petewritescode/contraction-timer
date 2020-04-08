import { combineReducers } from '@reduxjs/toolkit';
import { timerReducer } from './timer/timer.slice';
import { viewReducer } from './view/view.slice';

export const rootReducer = combineReducers({
    timer: timerReducer,
    view: viewReducer,
});
