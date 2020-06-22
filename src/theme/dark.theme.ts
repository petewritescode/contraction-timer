import { Theme } from '../models/theme.model';

const color = {
    blue: '#28a5e3',
    green: '#1fb3aa',
    pink: '#e83887',
    white: '#ffffff',
};

export const darkTheme: Theme = {
    color: {
        background: {
            stopped: color.green,
            contraction: color.pink,
            rest: color.blue,
        },
        text: color.white,
        control: color.white,
    },
};
