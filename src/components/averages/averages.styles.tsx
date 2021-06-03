import { breakpoint, fontSize, spacing } from '../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

export const StyledHeading = styled.h2`
  margin-bottom: ${spacing('m')};
  text-align: center;
  text-transform: uppercase;

  ${breakpoint('s', css`
    margin-bottom: ${spacing('m')};
  `)}

  ${breakpoint('l', css`
    font-size: ${fontSize('l')};
  `)}
`;

export const StyledAverages = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const StyledAverage = styled.li`
  flex: 1;
`;
