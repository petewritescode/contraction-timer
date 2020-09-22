import { StatusIndicatorAnimation } from '../models/status-indicator-animation.model';

export const STATUS_INDICATOR_ANIMATIONS: { [key: string]: StatusIndicatorAnimation } = {
    contractionInitial: {
        scale: [null, 0.95, 1],
        times: [0, 0.3, 1],
        duration: 1,
        repeat: 0,
    },
    contractionLoop: {
        scale: [1, 0.95, 1],
        times: [0, 0.3, 1],
        duration: 1,
        repeat: Infinity,
    },
    restInitial: {
        scale: [null, 1.05, 1],
        times: [0, 0.5, 1],
        duration: 3,
        repeat: 0,
    },
    restLoop: {
        scale: [1, 1.05, 1],
        times: [0, 0.5, 1],
        duration: 3,
        repeat: Infinity,
    },
    stopped: {
        scale: [null, 1],
        times: [0, 1],
        duration: 1,
        repeat: 0,
    },
};
