import React, { FunctionComponent } from 'react';
import { Heading } from '../heading/heading.component';
import { MenuButton } from '../menu-button/menu-button.component';
import { StyledHeader, StyledHeading } from './header.styles';

export const Header: FunctionComponent = () => (
    <StyledHeader>
        <StyledHeading>
            <Heading />
        </StyledHeading>

        <MenuButton />
    </StyledHeader>
);
