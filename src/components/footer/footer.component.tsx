import { StyledContainer, StyledFooter, StyledItem } from './footer.styles';
import { Container } from '../container/container.component';
import { IconType } from '../../models/icon-type.model';
import { NavLink } from './nav-link/nav-link.component';
import { Path } from '../../models/path.model';
import React from 'react';
import { View } from '../../models/view.model';
import { VIEW_TO_HEADING_MAP } from '../../constants/view.constants';

export const Footer: React.FC = () => (
    <StyledFooter>
        <nav>
            <Container>
                <StyledContainer>
                    <StyledItem>
                        <NavLink to={Path.Timer} icon={IconType.Timer} label={VIEW_TO_HEADING_MAP[View.Timer]} />
                    </StyledItem>

                    <StyledItem>
                        <NavLink to={Path.History} icon={IconType.History} label={VIEW_TO_HEADING_MAP[View.History]} />
                    </StyledItem>
                </StyledContainer>
            </Container>
        </nav>
    </StyledFooter>
);
