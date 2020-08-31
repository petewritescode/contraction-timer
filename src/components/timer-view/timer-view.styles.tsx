import { spacing } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledTimerView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
    padding-top: ${spacing('l')};
    padding-bottom: ${spacing('xl')};
`;

export const StyledSectionHeading = styled.h2`
    margin-bottom: ${spacing('m')};
    text-align: center;
    text-transform: uppercase;
`;
