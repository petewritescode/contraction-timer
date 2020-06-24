import styled, { css } from 'styled-components';

interface ButtonProps {
    selected?: boolean;
}

export const StyledNavButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    font-weight: bold;

    ${({ selected, theme }) => selected && css`
    background: ${theme.color.background.stopped};
    `}
`;

export const StyledIcon = styled.div`
    margin-right: 5px;
`;
