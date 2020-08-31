import { pxToRem, spacing } from '../../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

interface LinkProps {
    active?: boolean;
}

export const StyledNavLink = styled.a<LinkProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${pxToRem(45)};
    font-weight: bold;

    ${({ active }) => !active && css`
        opacity: 0.5;
    `}
`;

export const StyledIcon = styled.div`
    margin-right: ${spacing('s')};
`;
