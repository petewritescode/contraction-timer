import React from 'react';
import { StyledContainer } from './container.styles';

interface Props {
  fullHeight?: boolean;
  padded?: boolean;
}

export const Container: React.FC<Props> = ({ children, fullHeight = false, padded = false }) => (
  <StyledContainer fullHeight={fullHeight} padded={padded}>{children}</StyledContainer>
);
