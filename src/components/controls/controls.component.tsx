import React, { FunctionComponent } from 'react';
import { StyledControls, StyledPrimary, StyledSecondary, StyledTertiary } from './controls.styles';

export const Controls: FunctionComponent = () => (
    <StyledControls>
        <StyledPrimary>Primary</StyledPrimary>
        <StyledSecondary>Secondary</StyledSecondary>
        <StyledTertiary>Tertiary</StyledTertiary>
    </StyledControls>
);
