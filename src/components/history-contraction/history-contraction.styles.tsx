import styled from 'styled-components';

export const StyledHistoryContraction = styled.li`
    position: relative;
    height: 20px;
    padding-left: 40px;
    font-weight: bold;
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
        background-color: #ffffff;
    }
`;
