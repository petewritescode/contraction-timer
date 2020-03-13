import { ControlType } from '../models/control-type.model';
import { Theme } from '../models/theme.model';

const color = {
    green: '#3cecb5',
    navy: '#2e395b',
    pink: '#f676a0',
    white: '#ffffff',
};

export const darkTheme: Theme = {
    color: {
        background: color.navy,
        text: color.white,
        control: {
            border: color.white,
            icon: color.white,
            background: {
                [ControlType.Start]: color.green,
                [ControlType.Stop]: color.pink,
            },
        },
    },
};
