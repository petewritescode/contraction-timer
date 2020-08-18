import { spacing } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledTimerView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
    padding: ${spacing('l')} ${spacing('l')} ${spacing('xl')};
`;
