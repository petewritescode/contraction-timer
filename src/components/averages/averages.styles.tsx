import { spacing } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledHeading = styled.h2`
    margin-bottom: ${spacing('m')};
    text-align: center;
    text-transform: uppercase;
`;

export const StyledAverages = styled.ul`
    display: flex;
    justify-content: space-around;
`;

export const StyledAverage = styled.li`
    flex: 1;
`;
