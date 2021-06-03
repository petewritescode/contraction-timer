import { ICON_SIZE_TO_PIXELS_MAP } from '../../constants/icon.constants';
import { IconSize } from '../../models/icon-size.model';
import styled from 'styled-components';

interface Props {
  size: IconSize;
}

export const StyledIcon = styled.i<Props>`
  font-size: ${({ size }) => `${ICON_SIZE_TO_PIXELS_MAP[size]}px`};
  vertical-align: top;
`;
