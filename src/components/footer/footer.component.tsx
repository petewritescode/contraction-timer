import React, { FunctionComponent } from 'react';
import { StyledContainer, StyledFooter, StyledItem } from './footer.styles';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../container/container.component';
import { NavLink } from './nav-link/nav-link.component';
import { NavLinkType } from '../../models/nav-link-type.model';
import { View } from '../../models/view.model';
import { viewActions } from '../../store/view/view.slice';
import * as viewSelectors from '../../store/view/view.selectors';

export const Footer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const view = useSelector(viewSelectors.getView);

    const handleClick = (targetView: View) => () => {
        dispatch(viewActions.setView(targetView));
    };

    const renderLink = (type: NavLinkType, targetView: View) => (
        <NavLink type={type} active={targetView === view} onClick={handleClick(targetView)} />
    );

    return (
        <StyledFooter>
            <nav>
                <Container>
                    <StyledContainer>
                        <StyledItem>
                            {renderLink(NavLinkType.Timer, View.Timer)}
                        </StyledItem>

                        <StyledItem>
                            {renderLink(NavLinkType.History, View.History)}
                        </StyledItem>
                    </StyledContainer>
                </Container>
            </nav>
        </StyledFooter>
    );
};
