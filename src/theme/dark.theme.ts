import { Theme } from '../models/theme.model';

const color = {
    pink: '#e83887',
    white: '#ffffff',
    blue: '#28a5e3',
    purple: '#220036',
};

export const darkTheme: Theme = {
    color: {
        background: {
            stopped: color.purple,
            contraction: color.pink,
            rest: color.blue,
        },
        text: color.white,
        control: color.white,
    },
};
