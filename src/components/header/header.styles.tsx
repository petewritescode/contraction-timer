import { breakpoint, fontSize, pxToRem } from '../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: ${pxToRem(50)};

  ${breakpoint('s', css`
    height: ${pxToRem(60)};
  `)}
`;

export const StyledHeading = styled.h1`
  flex-grow: 1;
  font-size: ${fontSize('l')};
  font-weight: bold;

  ${breakpoint('s', css`
    font-size: ${fontSize('xl')};
  `)}
`;
