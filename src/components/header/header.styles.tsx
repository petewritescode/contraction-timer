import { fontSize } from '../../theme/helpers/font.helpers';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    padding-right: 20px;
    padding-left: 20px;
`;

export const StyledHeading = styled.h1`
    flex-grow: 1;
    font-size: ${fontSize('xl')};
    font-weight: bold;
`;
