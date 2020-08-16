import { Theme } from '../models/theme.model';

export const appTheme: Theme = {
    color: {
        contraction: '#e83887',
        ready: '#19af75',
        rest: '#28a5e3',
        neutralMin: '#ffffff',
        neutralMin25: 'rgba(255, 255, 255, 0.25)',
        neutralMin50: 'rgba(255, 255, 255, 0.5)',
        neutralMin75: 'rgba(255, 255, 255, 0.75)',
        neutralMax: '#000000',
        neutralMax25: 'rgba(0, 0, 0, 0.25)',
        neutralMax50: 'rgba(0, 0, 0, 0.5)',
        neutralMax75: 'rgba(0, 0, 0, 0.75)',
        neutralMid1: '#6e6e6e',
        neutralMid2: '#383838',
    },
    transition: {
        duration: '250ms',
    },
};
