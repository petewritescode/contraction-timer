import { borderRadius, color, spacing, transition } from '../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

interface Props {
    disabled?: boolean;
}

export const StyledSecondaryButton = styled.button<Props>`
    display: flex;
    align-items: center;
    height: 2rem;
    padding-right: ${spacing('m')};
    padding-left: ${spacing('s')};
    transition: opacity ${transition('m')};
    border-radius: ${borderRadius('xl')};
    background-color: ${color('neutralMin')};
    color: ${color('neutralMid2')};
    font-weight: bold;

    ${({ disabled }) => disabled && css`
        opacity: 0.5;
    `}
`;

export const StyledLabel = styled.span`
    margin-left: ${spacing('s')};
`;
