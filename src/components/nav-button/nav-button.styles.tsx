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

    ${({ selected }) => !selected && css`
        opacity: 0.5;
    `}
`;

export const StyledIcon = styled.div`
    margin-right: 5px;
`;
