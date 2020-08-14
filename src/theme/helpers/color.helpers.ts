import { Theme, ThemeColor } from '../../models/theme.model';
import { Status } from '../../models/status.model';

export const color = (name: keyof ThemeColor) => ({ theme }: { theme: Theme }) => theme.color[name];

export const statusColor = ({ theme, status }: { theme: Theme, status: Status }) => {
    switch (status) {
        case Status.Contraction:
            return theme.color.contraction;
        case Status.Rest:
            return theme.color.rest;
        default:
            return theme.color.ready;
    }
};
