import { borderWidth, color, spacing } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledHistoryInterval = styled.li`
    position: relative;
    height: 4rem;
    padding-left: ${spacing('xl')};
    line-height: 4rem;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0.5rem;
        border-left: ${borderWidth} solid ${color('neutralMin')};
    }
`;
