import { pxToRem } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    max-width: ${pxToRem(600)};
    margin-right: auto;
    margin-left: auto;
`;
