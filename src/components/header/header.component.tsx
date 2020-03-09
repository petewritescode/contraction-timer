import React, { FunctionComponent } from 'react';
import { Heading } from '../heading/heading.component';
import { ViewToggle } from '../view-toggle/view-toggle.component';
import { StyledHeader, StyledHeading } from './header.styles';

export const Header: FunctionComponent = () => (
    <StyledHeader>
        <StyledHeading>
            <Heading />
        </StyledHeading>

        <ViewToggle />
    </StyledHeader>
);
