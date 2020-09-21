import { spacing } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledTimerView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-top: ${spacing('l')};
    padding-bottom: ${spacing('xl')};
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    max-height: 800px;
`;

export const StyledAverages = styled.section`
    padding-top: ${spacing('l')};
    padding-bottom: ${spacing('l')};
`;
