import React, { FunctionComponent } from 'react';
import { StyledHeader, StyledHeading } from './header.styles';
import { Heading } from '../heading/heading.component';
import { ViewToggle } from '../view-toggle/view-toggle.component';

export const Header: FunctionComponent = () => (
    <StyledHeader>
        <StyledHeading>
            <Heading />
        </StyledHeading>

        <ViewToggle />
    </StyledHeader>
);
