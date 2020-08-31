import { pxToRem, spacing } from '../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

interface Props {
    fullHeight: boolean;
    padded: boolean;
}

export const StyledContainer = styled.div<Props>`
    max-width: ${pxToRem(600)};
    margin-right: auto;
    margin-left: auto;

    ${({ fullHeight }) => fullHeight && css`
        height: 100%;
    `}

    ${({ padded }) => padded && css`
        padding-right: ${spacing('l')};
        padding-left: ${spacing('l')};
    `}
`;
