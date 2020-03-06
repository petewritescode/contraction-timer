import React, { FunctionComponent } from 'react';
import { Heading } from '../heading/heading.component';
import { MenuButton } from '../menu-button/menu-button.component';
import { Wrapper, HeadingWrapper } from './header.styled';

export const Header: FunctionComponent = () => (
    <Wrapper>
        <HeadingWrapper>
            <Heading />
        </HeadingWrapper>

        <MenuButton />
    </Wrapper>
);
