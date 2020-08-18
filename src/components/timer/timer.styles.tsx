import { breakpoint, pxToRem, spacing } from '../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

export const StyledTimer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${pxToRem(180)};
    height: ${pxToRem(180)};
    margin-right: auto;
    margin-left: auto;

    ${breakpoint('s', css`
        width: ${pxToRem(210)};
        height: ${pxToRem(210)};
    `)}
`;

export const StyledStatusIndicator = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const StyledLabel = styled.div`
    margin-top: ${spacing('s')};
    text-transform: uppercase;
`;
