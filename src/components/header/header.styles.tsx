import { fontSize, pxToRem, spacing } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    height: ${pxToRem(60)};
    padding-right: ${spacing('l')};
    padding-left: ${spacing('l')};
`;

export const StyledHeading = styled.h1`
    flex-grow: 1;
    font-size: ${fontSize('xl')};
    font-weight: bold;
`;
