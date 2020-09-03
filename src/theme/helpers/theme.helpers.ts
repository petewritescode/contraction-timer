import { css } from 'styled-components';
import { Status } from '../../models/status.model';
import { Theme } from '../../models/theme.model';

export const pxToRem = (pixels: number) => `${pixels / 16}rem`;

export const borderWidth = (name: keyof Theme['border']['width']) => ({ theme }: { theme: Theme }) => theme.border.width[name];

export const borderRadius = (name: keyof Theme['border']['radius']) => ({ theme }: { theme: Theme }) => theme.border.radius[name];

export const breakpoint = (name: keyof Theme['breakpoint'], styles: any) => ({ theme }: { theme: Theme }) => css`
    @media (min-width: ${theme.breakpoint[name]}) {
        ${styles}
    }
`;

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

export const fontSize = (name: keyof Theme['font']['size']) => ({ theme }: { theme: Theme }) => theme.font.size[name];

export const spacing = (name: keyof Theme['spacing']) => ({ theme }: { theme: Theme }) => theme.spacing[name];

export const transitionDuration = (name: keyof Theme['transition']['duration']) => ({ theme }: { theme: Theme }) => (
    theme.transition.duration[name]
);
