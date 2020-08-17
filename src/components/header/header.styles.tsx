import { fontSize } from '../../theme/helpers/font.helpers';
import { spacing } from '../../theme/helpers/spacing.helpers';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    padding-right: ${spacing('l')};
    padding-left: ${spacing('l')};
`;

export const StyledHeading = styled.h1`
    flex-grow: 1;
    font-size: ${fontSize('xl')};
    font-weight: bold;
`;
