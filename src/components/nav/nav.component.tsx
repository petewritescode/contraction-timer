import React, { FunctionComponent } from 'react';
import { StyledContainer, StyledItem, StyledNav } from './nav.styles';
import { useDispatch, useSelector } from 'react-redux';
import { NavButton } from '../nav-button/nav-button.component';
import { NavButtonType } from '../../models/nav-button-type.model';
import { View } from '../../models/view.model';
import { viewActions } from '../../store/view/view.slice';
import * as viewSelectors from '../../store/view/view.selectors';

export const Nav: FunctionComponent = () => {
    const dispatch = useDispatch();
    const view = useSelector(viewSelectors.getView);

    const handleClick = (targetView: View) => () => {
        dispatch(viewActions.setView(targetView));
    };

    const renderButton = (type: NavButtonType, targetView: View) => (
        <NavButton type={type} selected={targetView === view} onClick={handleClick(targetView)} />
    );

    return (
        <StyledNav>
            <StyledContainer>
                <StyledItem>
                    {renderButton(NavButtonType.Timer, View.Timer)}
                </StyledItem>

                <StyledItem>
                    {renderButton(NavButtonType.History, View.History)}
                </StyledItem>
            </StyledContainer>
        </StyledNav>
    );
};
