import { Theme } from '../models/theme.model';

export const appTheme: Theme = {
    border: {
        width: '0.25rem',
        radius: {
            s: '0.25rem',
            m: '0.5rem',
            l: '0.75rem',
            xl: '1rem',
        },
    },
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
    font: {
        size: {
            s: '0.769rem',
            m: '1rem',
            l: '1.3rem',
            xl: '1.69rem',
            xxl: '2.197rem',
            xxxl: '2.856rem',
            xxxxl: '3.713rem',
        },
    },
    spacing: {
        s: '0.25rem',
        m: '0.5rem',
        l: '1rem',
        xl: '2rem',
    },
    transition: {
        duration: '250ms',
    },
};
