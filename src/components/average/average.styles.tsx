import { fontSize, spacing } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledAverage = styled.div`
    text-align: center;
`;

export const StyledTime = styled.div`
    margin-bottom: ${spacing('s')};
    font-size: ${fontSize('xxl')};
`;

export const StyledLabel = styled.div`
    font-size: ${fontSize('s')};
    text-transform: uppercase;
`;
