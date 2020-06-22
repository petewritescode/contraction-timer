import styled, { css } from 'styled-components';

interface TrProps {
    showDivider?: boolean;
}

interface TdProps {
    highlight?: boolean;
}

export const StyledTable = styled.table`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const StyledTHead = styled.thead`
    border-bottom: 1px solid white;
`;

export const StyledTBody = styled.tbody`
    flex-grow: 1;
    overflow: auto;
`;

export const StyledTr = styled.tr<TrProps>`
    display: flex;
    padding: 10px 20px;

    &:not(:first-child) {
        border-top: 1px solid rgba(255, 255, 255, 0.25);

        ${({ showDivider }) => showDivider && css`
            border-top-color: white;
        `}
    }
`;

export const StyledTh = styled.th`
    flex: 1;
`;

export const StyledTd = styled.td<TdProps>`
    flex: 1;

    ${({ highlight }) => highlight && css`
        font-weight: bold;
    `}
`;
