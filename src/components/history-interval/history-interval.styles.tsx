import styled from 'styled-components';

export const StyledHistoryInterval = styled.li`
    position: relative;
    height: 60px;
    padding-left: 40px;
    line-height: 60px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 8px;
        border-left: 4px solid #ffffff;
    }
`;
