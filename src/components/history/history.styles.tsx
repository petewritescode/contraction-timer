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
    padding-right: 20px;
    padding-left: 20px;
`;

export const StyledTHead = styled.thead`
    border-bottom: 2px solid white;
`;

export const StyledTBody = styled.tbody`
    flex-grow: 1;
    padding-bottom: 80px;
    overflow: auto;
`;

export const StyledTr = styled.tr<TrProps>`
    display: flex;
    margin-top: 10px;

    &:first-child {
        margin-top: 20px;
    }

    &:last-child {
        margin-bottom: 20px;
    }

    ${({ showDivider }) => showDivider && css`
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
    `}
`;

export const StyledTh = styled.th`
    flex: 1;
    text-transform: uppercase;
`;

export const StyledTd = styled.td<TdProps>`
    flex: 1;

    ${({ highlight }) => highlight && css`
        font-weight: bold;
    `}
`;
