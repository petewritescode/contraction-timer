import { ControlType } from './control-type.model';

export interface Theme {
    color: {
        background: string;
        text: string;
        control: {
            background: Partial<Record<ControlType, string>>;
            border: string;
            icon: string;
        };
    };
}
