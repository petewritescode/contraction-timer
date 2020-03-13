import { ControlType } from './control-type.model';

export interface Theme {
    color: {
        background: string;
        text: string;
        control: {
            border: string;
            icon: string;
            background: Partial<Record<ControlType, string>>;
        };
    };
}
