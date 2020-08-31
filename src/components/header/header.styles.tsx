import { fontSize, pxToRem } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    height: ${pxToRem(60)};
`;

export const StyledHeading = styled.h1`
    flex-grow: 1;
    font-size: ${fontSize('xl')};
    font-weight: bold;
`;
