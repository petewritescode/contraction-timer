import styled from 'styled-components';

export const StyledHistoryContraction = styled.li`
    display: flex;
    position: relative;
    height: 20px;
    padding-left: 40px;
    line-height: 20px;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.neutralMin};
    }
`;

export const StyledDuration = styled.div`
    flex-grow: 1;
    font-size: 1.3rem;
    font-weight: bold;
`;

export const StyledDate = styled.div`
    font-size: 0.75rem;
`;
