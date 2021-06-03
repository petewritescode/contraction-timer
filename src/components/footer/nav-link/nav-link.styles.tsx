import { borderWidth, breakpoint, color, pxToRem, spacing } from '../../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${pxToRem(40)};
  border-top: ${borderWidth('m')} solid transparent;
  font-weight: bold;

  ${breakpoint('s', css`
    height: ${pxToRem(50)};
  `)}

  &.active {
    border-color: ${color('neutralMin')};
  }

  &:not(.active) {
    &:hover {
      border-color: ${color('neutralMin50')};
    }
  }
`;

export const StyledIcon = styled.div`
  margin-right: ${spacing('s')};
`;
