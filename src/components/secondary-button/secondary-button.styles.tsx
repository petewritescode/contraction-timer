import styled, { css } from 'styled-components';
import { color } from '../../theme/helpers/color.helpers';
import { spacing } from '../../theme/helpers/spacing.helpers';
import { transitionDuration } from '../../theme/helpers/transition.helpers';

interface Props {
    disabled?: boolean;
}

export const StyledSecondaryButton = styled.button<Props>`
    display: flex;
    align-items: center;
    height: 30px;
    padding-right: ${spacing('m')};
    padding-left: ${spacing('s')};
    transition: opacity ${transitionDuration};
    border-radius: 15px;
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
