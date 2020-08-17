import { css } from 'styled-components';
import { Theme } from '../../models/theme.model';

export const breakpoint = (name: keyof Theme['breakpoint'], styles: any) => ({ theme }: { theme: Theme }) => css`
    @media (min-width: ${theme.breakpoint[name]}) {
        ${styles}
    }
`;
