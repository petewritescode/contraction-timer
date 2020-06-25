import styled, { css } from 'styled-components';

interface Props {
    disabled?: boolean;
}

export const StyledSecondaryButton = styled.button<Props>`
    display: flex;
    align-items: center;
    height: 30px;
    padding-right: 10px;
    padding-left: 5px;
    transition: opacity 250ms;
    border: 2px solid #ffffff;
    border-radius: 15px;
    font-weight: bold;

    ${({ disabled }) => disabled && css`
        opacity: 0.5;
    `}
`;

export const StyledLabel = styled.span`
    margin-left: 5px;
`;
