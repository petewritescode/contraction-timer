import { Status } from '../../models/status.model';
import { Theme } from '../../models/theme.model';

export const color = (name: keyof Theme['color']) => ({ theme }: { theme: Theme }) => theme.color[name];

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
