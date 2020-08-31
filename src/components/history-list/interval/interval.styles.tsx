import { borderWidth, color, pxToRem, spacing } from '../../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledInterval = styled.li`
    position: relative;
    height: ${pxToRem(60)};
    padding-left: ${spacing('xl')};
    line-height: ${pxToRem(60)};

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${pxToRem(8)};
        border-left: ${borderWidth} solid ${color('neutralMin')};
    }
`;
