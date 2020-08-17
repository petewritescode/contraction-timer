import { borderWidth } from '../../theme/helpers/border.helpers';
import { color } from '../../theme/helpers/color.helpers';
import { spacing } from '../../theme/helpers/spacing.helpers';
import styled from 'styled-components';

export const StyledHistoryBreak = styled.li`
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
        border-left: ${borderWidth} dashed ${color('neutralMin50')};
    }
`;
