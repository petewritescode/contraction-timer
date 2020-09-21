import { breakpoint, spacing } from '../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

export const StyledHeading = styled.h2`
    margin-bottom: ${spacing('s')};
    text-align: center;
    text-transform: uppercase;

    ${breakpoint('s', css`
        margin-bottom: ${spacing('m')};
    `)}
`;

export const StyledAverages = styled.ul`
    display: flex;
    justify-content: space-around;
`;

export const StyledAverage = styled.li`
    flex: 1;
`;
