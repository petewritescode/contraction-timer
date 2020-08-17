import { pxToRem, spacing } from '../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

interface ButtonProps {
    selected?: boolean;
}

export const StyledNavButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${pxToRem(45)};
    font-weight: bold;

    ${({ selected }) => !selected && css`
        opacity: 0.5;
    `}
`;

export const StyledIcon = styled.div`
    margin-right: ${spacing('s')};
`;
