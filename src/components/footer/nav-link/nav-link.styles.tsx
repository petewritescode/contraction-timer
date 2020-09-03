import { borderWidth, color, pxToRem, spacing } from '../../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

interface LinkProps {
    active?: boolean;
}

export const StyledNavLink = styled.a<LinkProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${pxToRem(50)};
    border-top: ${borderWidth('m')} solid transparent;
    font-weight: bold;

    ${({ active }) => !active && css`
        &:hover {
            border-color: ${color('neutralMin50')};
        }
    `}

    ${({ active }) => active && css`
        border-color: ${color('neutralMin')};
    `}
`;

export const StyledIcon = styled.div`
    margin-right: ${spacing('s')};
`;
