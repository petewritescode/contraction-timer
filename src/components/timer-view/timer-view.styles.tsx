import { spacing } from '../../theme/helpers/spacing.helpers';
import styled from 'styled-components';

export const StyledTimerView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 100%;
    padding-right: ${spacing('l')};
    padding-bottom: ${spacing('l')};
    padding-left: ${spacing('l')};
`;
