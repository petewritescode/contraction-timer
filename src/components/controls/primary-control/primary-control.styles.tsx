import { breakpoint, color, pxToRem, statusColor, transitionDuration } from '../../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';
import { Status } from '../../../models/status.model';

interface Props {
  status: Status;
}

export const StyledPrimaryControl = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(80)};
  height: ${pxToRem(80)};
  transition: color ${transitionDuration('m')};
  border-radius: 50%;
  background-color: ${color('neutralMin')};
  color: ${statusColor};

  ${breakpoint('s', css`
    width: ${pxToRem(100)};
    height: ${pxToRem(100)};
  `)}
`;
