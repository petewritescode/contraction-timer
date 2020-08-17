import { color, fontSize, spacing } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledHistoryContraction = styled.li`
    display: flex;
    position: relative;
    height: 1.25rem;
    padding-left: ${spacing('xl')};
    line-height: 1.25rem;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background-color: ${color('neutralMin')};
    }
`;

export const StyledDuration = styled.div`
    flex-grow: 1;
    font-size: ${fontSize('l')};
    font-weight: bold;
`;

export const StyledDate = styled.div`
    font-size: ${fontSize('s')};
`;
