import { IconSize } from '../../models/icon-size.model';
import { SIZE_TO_PIXELS_MAP } from '../../constants/icon.constants';
import styled from 'styled-components';

interface Props {
    size: IconSize;
}

const getPixelSize = (size: IconSize): number => SIZE_TO_PIXELS_MAP[size];

export const StyledIcon = styled.i<Props>`
    font-size: ${({ size }) => `${getPixelSize(size)}px`};
`;
