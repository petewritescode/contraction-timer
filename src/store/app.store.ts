import { configureStore } from '@reduxjs/toolkit';
import persistState from 'redux-localstorage';
import { rootReducer } from './root.reducer';

// Type definitions are incorrect, use 'any' to bypass (https://github.com/elgerlambert/redux-localstorage/issues/78)
const persistStateEnhancer: any = persistState(['timer'] as any);

export const appStore = configureStore({
    reducer: rootReducer,
    enhancers: [persistStateEnhancer],
});
