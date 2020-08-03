import { Theme } from '../models/theme.model';

export const appTheme: Theme = {
    color: {
        status: {
            contraction: '#e83887',
            ready: '#1fb3aa',
            rest: '#28a5e3',
        },
        neutral: {
            min: '#ffffff',
            min25: 'rgba(255, 255, 255, 0.25)',
            min50: 'rgba(255, 255, 255, 0.5)',
            min75: 'rgba(255, 255, 255, 0.75)',
            max: '#000000',
            max25: 'rgba(0, 0, 0, 0.25)',
            max50: 'rgba(0, 0, 0, 0.5)',
            max75: 'rgba(0, 0, 0, 0.75)',
            mid1: '#999999',
            mid2: '#666666',
            mid3: '#333333',
        },
    },
};
