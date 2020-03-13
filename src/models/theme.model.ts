import { ControlType } from './control-type.model';

export interface Theme {
    color: {
        background: string;
        text: string;
        control: {
            border: string;
            icon: string;
            type: Partial<Record<ControlType, string>>;
        };
    };
}
