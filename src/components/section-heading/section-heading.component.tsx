import React, { FunctionComponent } from 'react';
import { StyledSectionHeading } from './section-heading.styles';

export const SectionHeading: FunctionComponent = ({ children }) => (
    <StyledSectionHeading>{children}</StyledSectionHeading>
);
